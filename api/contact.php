<?php
// Set CORS headers for local development
header("Access-Control-Allow-Origin: http://localhost:3000"); // Adjust port if needed
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit;
}

// Get the POST data
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(["message" => "Missing required fields"]);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($data['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid email format"]);
    exit;
}

// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Include Composer autoloader
// Adjust the path if your vendor directory is located elsewhere
require 'vendor/autoload.php';

try {
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF; // Enable verbose debug output if needed: SMTP::DEBUG_SERVER
    $mail->isSMTP();

    // SMTP server settings 
    // You need to use your actual email provider's settings here
    $mail->Host       = 'smtp.yourprovider.com'; // Replace with your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@calabriatechnology.com'; // Your email address
    $mail->Password   = 'your-email-password'; // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Or ENCRYPTION_SMTPS for SSL
    $mail->Port       = 587; // Typically 587 for TLS, 465 for SSL

    // Recipients
    $mail->setFrom('info@calabriatechnology.com', 'Contact Form');
    $mail->addAddress('info@calabriatechnology.com');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission from $name";

    // Email body with styling
    $email_body = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            h2 {
                color: #2563eb;
            }
            .info {
                margin-bottom: 20px;
            }
            .label {
                font-weight: bold;
            }
            .message {
                background-color: #f9f9f9;
                padding: 15px;
                border-radius: 5px;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>New Contact Form Submission</h2>
            <div class='info'>
                <p><span class='label'>Name:</span> $name</p>
                <p><span class='label'>Email:</span> $email</p>
            </div>
            <div class='info'>
                <p class='label'>Message:</p>
                <div class='message'>$message</div>
            </div>
        </div>
    </body>
    </html>
    ";

    $mail->Body = $email_body;
    $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message";

    // Send the email
    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Your message has been sent successfully!"
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to send the message. Please try again later.",
        "error" => $mail->ErrorInfo
    ]);
}
