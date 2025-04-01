import React, { useState } from "react";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [hoveredButtons, setHoveredButtons] = useState({});

  // Wave button image URL
  const waveImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fbtn-wave.png?alt=media&token=267962fb-78ee-4fcb-a559-034579dc675d";

  const blogs = [
    {
      id: 1,
      title: "How AI Cuts Development Time by 50%: A Deep Dive into Automation",
      author: "Admin",
      date: "March 15, 2025",
      excerpt:
        "Imagine this: You cut down the amount of time you spend creating software without compromising on quality by 50%...",
      image: blog1,
      content: `Imagine this: You cut down the amount of time you spend creating software without compromising on quality by 50%. Suppose you could write, test, and ship with ease—all in significantly shorter time periods than they do now. AI-driven automation is turning this into a reality, revolutionizing how software is being created. With AI, teams are able to automate processes, cut redundant work, and focus on innovation.
Since there is a high rate of software development, time is a governing factor. Developers and organizations are constantly seeking ways to cut down project durations without compromising on quality. Artificial Intelligence (AI) enters the scene here. AI-driven automation is revolutionizing software development through process optimization, minimizing the role of humans, and improving efficiency. In this article, we will look at how AI can reduce half of the time spent on software development by mechanizing some of the most fundamental aspects of the software life cycle.


The Use of Artificial Intelligence in Software Development
Artificial intelligence is transforming software development by offering automated routine tasks, reducing errors, and offering intelligent insights. AI-powered tools offer faster and smarter development cycles from code generation to testing and deployment. Following are the most relevant areas where AI is making a difference:

1. AI-Powered Code Generation
Writing code has been a time-sucking process requiring skills and technical effort. AI tools such as GitHub Copilot and OpenAI Codex have the capability to generate code snippets automatically from natural language prompts.
Code faster with high productivity at low effort.
Reduce syntax and logical errors.
Spend more time on harder problem-solving rather than boilerplate code.
With AI code generation, hours, if not days, of boring coding can be cut short, and with it, quick development and iteration.

2. Test Automation and Bug Fixing
Testing is likely the most time-consuming task in software development. AI-driven test automation tools are able to automate regression tests, unit tests, and even security testing. Test.ai and Applitools are utilizing AI to:
Catch bugs before going into production.
Run and execute test scripts with automation.
Lower manual testing costs and increase accuracy.
Developers are able to automate and minimize debugging with AI in testing and thereby release high-quality software in shorter time frames.

3. Intelligent Code Reviews and Debugging
Code review is an important aspect of code quality, yet the development process is slowed down due to code reviews. AI and AI-driven code review tools such as DeepCode and Codacy comment and recommend remediations in real-time. They:
Detects inefficiencies and vulnerabilities in code.
Recommend best practices to optimize.
Minimize reliance on manual verification.
Through AI-powered code review, developers can have cleaner code and quicker project delivery.

4. Deployment of Optimized Code
Deployment is a critical phase where software is made available to users. AI finishes the process by automating DevOps tasks, including:
Continuous integration and continuous deployment (CI/CD).
Infrastructure provisioning and configuration management.
Predictive analysis to avoid failure during deployment.
AI-powered deployment software, including AWS CodeDeploy and Google's AI-powered DevOps solutions, automates and simplifies problem-free and bug-free software deployments, with no chance of delays.

5. Real-Time Collaboration and Workflow Automation
Collaboration is crucial for software development, especially for distributed teams. AI-powered collaboration software facilitates collaboration by:
Automating task assignment and tracking.
Offering real-time analytics and predictive suggestions.
More interaction with AI-based project management assistants.
By effective workflows and bottleneck removal, AI allows teams to work more efficiently and meet deadlines sooner.

6. AI-Powered Documentation and Knowledge Management
Documenting code, creating API documentation, and updating knowledge bases are too tedious tasks. AI does all this through auto-documentation by:
Creating technical documentation from code
Automatically updating knowledge bases with the latest information
Instant access to pertinent information through AI-driven search tools is offered.
Developers can perform more development and less documentation through AI.

The Impact of AI on Development Time
With the application of AI in software development, developers and organizations can accomplish the following:
50% Faster Development: Coding, testing, and deployment time is drastically reduced through AI automation.
Less Human Error: AI eliminates bugs and vulnerabilities, hence fewer debugging delays.
Increased Productivity: Developers work on complex problem-solving while AI handles routine tasks.
Cost Savings: Less development time means less operational cost and quicker time-to-market.

Conclusion
AI is no longer futurology—it's already starting to make its presence felt within the software development landscape. From generation to deployment optimization, AI technology enables developers to save time during development without compromising quality. Organizations embracing AI in development are leading the way by having their software developed and released faster, at a lower cost, and of better quality. As AI continues to improve every year, AI deployment in software development will keep on rising, and automation will be a key aspect of coding in the future.
Ready to harness the power of AI-powered development? The moment is here—start automating and revolutionize your software experience now!

`,
    },
    {
      id: 2,
      title:
        "The Future of AI in Software Development: 8 ways AI is Reshaping Code, Testing, and Innovation",
      author: "Admin",
      date: "February 28, 2025",
      excerpt:
        "Artificial Intelligence (AI) has already revolutionized companies globally, and using AI in software development is not different...",
      image: blog2,
      content: `Artificial Intelligence (AI) has already revolutionized companies globally, and using AI in software development is not different. From making trivial tasks automated to improving productivity, AI-powered development tools are revolutionizing the software design and maintenance processes. With newer AI technology unwinding, the future of AI-based development holds promises that can revolutionize software writing. In this article, we will discover what emerging trends and promises AI-driven development will bring in the future.

1. AI-Driven Code Generation Will Be the New Norm
Code generation is the most astonishing achievement in AI-powered development. GitHub Copilot, OpenAI Codex, and Tab Nine already provide effortless generation of code snippets with very few natural language inputs. Yet, as intelligence and knowledge develop, we can anticipate the degree of sophistication in such tools to increase exponentially.
AI code will be the exception rather than the rule in the next couple of years. Developers will utilize AI to create complicated patterns of code and whole modules with ease. This will eliminate drudgework on repetitive tasks such as coding duplication orders of magnitude and allow developers to focus more on creative problem-solving. This, by extension, is a sign that we can look forward to faster development cycles and even more innovative software solutions.

2. Increased Integration of AI in DevOps and Continuous Integration (CI)
Artificial intelligence has already started to find an important role in DevOps, especially for deployment and test automation. However, with evolving AI, it will become further embedded in the DevOps pipeline. AI capabilities to predict errors and recommend optimal deployment plans will keep improving and will become an essential tool in the hands of DevOps engineers.
In the future, AI-based DevOps tools will not only do routine work but even complex decision-making. For example, AI will be able to foresee issues in production environments much in advance so that developers can fix them before they happen. Continuous Integration (CI) pipelines will also turn intelligent, and AI will detect bugs, test software, and even release patches with minimal or no human intervention.

3. AI-Driven Debugging and Error Correction
Debugging is probably the most tedious and time-consuming aspect of software coding. In future AI systems, this will be relatively more effective. We will witness the AI taking on increasingly potent detection and bug-fixing functions in the years ahead.
AI-debugging tools would not only identify bugs but also automatically repair them in real time. They would learn from existing code and debugging patterns using machine learning and provide more precise repair suggestions. By saving time on debugging, developers would have more time for coding and releasing higher-quality software.

4. AI-powered testing will transform QA processes with automation.
Quality assurance (QA) is always a part of software development but will be revolutionized by AI. AI-powered testing tools can already automate regression testing and performance testing, but there's more on the horizon. In the near future, AI will write and test itself, driven by code changes and user feedback. AI will even be capable of determining the parts of the code that are most susceptible to bugs, allowing testing to be more focused and efficient. Further, AI-based testing will also learn over time, with the capability to learn as the codebase evolves along with user requirements. This will lead to faster, more accurate testing and ultimately to better software.

5. Intelligent AI-Based Project Management Softwares
AI will revolutionize software development project management through real-time feedback and seamless workflows. AI-powered automation project management software already helps with task assignment, calendar planning, and resource planning, but their future capabilities will be even more impactful.
Since AI gets better with experience, it will be capable of forecasting project timelines, identifying roadblocks, and suggesting alterations to keep things moving. The systems will also simplify the management of remote teams with real-time communication and collaboration metrics. AI-driven project management software will enable teams to achieve more, deliver timely, and minimize workflow interruptions.

6. The Rise of Low-Code and No-Code AI Platforms
With AI still developing, no-code and low-code app development platforms will be increasingly in demand. The platforms allow those without coding knowledge or with little coding knowledge to develop apps through drag-and-drop features and prefabricated templates. The platforms will be augmented with AI features in the future to allow users to develop and deploy AI-driven apps without needing to develop elaborate codes.
AI-powered low-code/no-code platforms will enable business analysts, marketers, and other non-technical stakeholders to create their own AI applications. It will democratize software development, decrease dependency on skilled developers, lead to quicker innovation, and lead to more tailored software solutions.

7. AI-Driven Personalization of User Experiences
User experience (UX) is also becoming a bigger part of software development, and their AI is already being applied. The future will see more dynamic and personalized user experiences with AI shaping user habits in real time.
AI will enable programmers to create programs that learn customers' familiarity, tastes, and preferences. For example, AI will auto-redesign UIs, recommend operations, and even customize content based on the user's familiarity with the program. Personalization will maximize satisfaction and interaction for the user, and therefore AI-based software will be intuitive and progressively intuitive.

8. Ethical Implications and AI Dominance in Design
Since more software development will be AI-driven, there will be a rise in governance and ethical issues. Transparency, fairness, and neutrality of AI systems will be a key part of software development.
We can anticipate only more regulation and restriction on the use of AI for development in the future. Developers and organizations will have to take into account the ethical uses of their application of AI, especially as AI begins to make decisions on its own. AI governance policies will see to it that AI systems are developed responsibly and to moral standards.

Final Thoughts 
The future of AI development is promising with numerous innovations waiting in the pipeline to be unleashed. From AI-based code generation and test tools to AI-powered DevOps and project management, AI will revolutionize the face of each stage in the software development lifecycle. As these technologies keep advancing further, developers will be creating even more innovative, better-quality software than ever before, faster than ever.
AI effects on software development can't be avoided, and creators who utilize such technology will be more prepared to deal with the challenges of an extremely dynamic profession. Gazing into the future reveals that one thing is certain: AI-powered development is here to stay, and the opportunities are endless.
`,
    },
    {
      id: 3,
      title:
        "AI Code Generation: The Future of Smarter and Error-Free Programming",
      author: "Admin",
      date: "January 20, 2024",
      excerpt:
        "With the rapidly increasing speed and evolving nature of software programming, developers never cease searching for methods in which they can automate and optimize their work...",
      image: blog3,
      content: `With the rapidly increasing speed and evolving nature of software programming, developers never cease searching for methods in which they can automate and optimize their work. Perhaps the most exciting development in this direction is AI-based code generation. AI-based code generation software is slowly but surely becoming the software of choice for developers because it enables them to generate code quicker, remove the scope for human error, and enhance the quality of the software. But how does it work, and why are programmers so excited about the new tech?
In this blog, we will dive into the realm of AI-aided code generation and try to understand why coders embraced it as their new BFF overnight.

What is AI-Powered Code Generation?
Code generation with the help of machine learning and natural language processing to automatically generate code from user inputs. Rather than typing line by line, the developer can make use of AI to assist with generating blocks, functions, or even programs of code. GitHub Copilot, OpenAI Codex, and Tannins are a few of the most well-known code generation tools that use AI to facilitate coding to become simpler and faster.
These are all founded on gigantic databases and powerful algorithms to forecast and code production as a function of the context of the task. AI-driven code production depends on analyzing user input—natural language commands, comments, or code context—and producing the most relevant code output defined in the training set for the model.

How AI-Powered Code Generation Works
AI code generation has some fundamental components that make it a useful tool for developers. Below is a breakdown of how it works:

1. Natural Language Processing (NLP) and Understanding
Most AI code generators begin by dissecting the command of the developer through natural language processing (NLP). That translates to, instead of having highly specialized specs or official coding directions, the coder simply writes what they need in basic, easy-to-understand human terms. So if the coder types out "Make a function to sort a list of numbers in ascending order," the AI code maker comes up with the corresponding code.
NLP makes it possible for such software to recognize simple and compound instructions and convert them into code that can be executed. This makes AI-supported code generation very user-friendly, reducing the learning curve for new developers and speeding up coding for experts.

2. Training on Gigantic Repositories of Code
Code generation technologies based on AI are learned on massive open-source code repositories. These repositories include millions of lines of code in a variety of programming languages, applications, and frameworks. Processing this, the AI models learn patterns, best practices, and common coding strategies. Upon the requests by the developers, the models reference the training to produce code that meets best practices and patterns in the repository.
The more training data, the better they are able to comprehend context and write good code snippets. With this, AI-based tools become smarter with time because they "learn" from existing code and problems encountered by developers.

3. Contextual Understanding and Code Prediction
AI code generation tools do not vomit out random code fragments; they know the context in which the programmer is operating. They look around at the code they're surrounded by, comments, and even variable names and make an educated guess about the next best code to write. This context awareness means not only is the generated code functional, but it will also integrate into the codebase seamlessly.
For instance, if the developer is programming against a particular framework like React or Django, the AI tool will consider that and generate code that is compatible with the destination framework so that time, which otherwise gets wasted searching for the appropriate syntax and functions, is saved.

4. Real-Time Code Suggestions
One of the biggest strengths of AI-powered code generation tools is real-time recommendations. As programmers, coders, and AI-powered tools can recommend how to fill out code and rework or even offer alternative solutions. This allows programmers to code faster and with fewer errors.
Additionally, AI-powered tools can screen common mistakes (like syntax mistakes or logical mistakes). and warn programmers about them before they become a problem. This feedback cycle also speeds up the development process, but besides this, it also helps the developers learn and improve by demonstrating where they possibly forgot something.



Why Developers Admire AI-Powered Code Generation
Since we've already discovered what code generation is using AI and how it works, let us go over what makes developers so fond of it. The important benefits are below:

1. More Productivity and Efficiency
Artificial intelligence-powered code generation tools free developers from valuable time by performing the tedious coding work. Rather than spending time writing boilerplate code or looking up correct syntax, developers can have machines generate the code in seconds. This allows them to focus on more complex and creative parts of coding, such as problem-solving and developing new features. Developers can therefore complete projects faster and at reduced costs, leading to overall productivity.

2. Reduced Coding Errors and Bugs
Manual coding has the propensity for being wrong, either it's a mistake in a semicolon, a typographical mistake, or a logic fallacy. AI-based code generation tools reduce these mistakes to a very high degree by suggesting and identifying probable mistakes at the time. Due to their potential to create error-free code pieces based on context, AI tools reduce bugs in the output and produce high-quality software.

3. Faster Onboarding of New Developers
New coders or new developers learning a new programming language will have AI code generation tools as an excellent learning buddy. They provide instant coding suggestions, descriptions, and even coding best practices to new developers so that they can learn at a faster rate. They can see how specific functions and libraries are used in different situations and learn the art of writing clean, efficient code.

4. Collaboration Improvements
Code generation tools based on artificial intelligence can also enhance team collaboration. As the tools create code with best practices, teams can have consistent coding standards for the entire project. Additionally, since the tools can predict and generate code snippets in real-time, developers spend less time on individual tasks, which provides them with time to collaborate and solve problems together.

5. Lower Development Costs
Through doing all the testing, debugging, and coding in a shorter time, code generation with the help of AI can save development costs. The development process becomes quicker, and there's less usage of resources in debugging and coding manually. It is particularly well-suited for startups or low-budget companies, as they can launch products earlier and at lower cost.

Conclusion
Code generation with AI is transforming the software development process. Being able to code faster, decrease errors, and facilitate collaboration led to it getting popular among developers within quite a short span of time. With the progress of AI technology, we can look forward to seeing these tools become more advanced, even more creative in their capability and potential. With AI-based code development, developers are more efficient and produce high-quality innovative code in less cycle time. With AI, the trend will continue to grow in the future with the way code is written and created.
`,
    },
    {
      id: 4,
      title:
        "AI vs. Human Developers: The Battle of Code, Creativity, and Innovation",
      author: "Admin",
      date: "December 10, 2023",
      excerpt:
        "As AI continues to make unprecedented advancements, the one question on everybody's mind is: will AI replace human developers in the near future?...",
      image: blog4,
      content: `As AI continues to make unprecedented advancements, the one question on everybody's mind is: will AI replace human developers in the near future? As AI-based software already codes, debugs, and automates mundane tasks, it is easy to imagine that human developers' time is limited. However, while AI is transforming the world of software development, there continue to be some vital areas in which human developers stand out. So, what exactly sets AI and human developers apart? 
In this blog, we’ll explore five key differences that highlight why human developers will remain essential in the world of software development, despite the rise of AI technology.


1. Creativity and Problem Solving
AI: AI is good at dealing with large amounts of data and problem-solving under parameters. AI can follow rules, recognize patterns, and come up with solutions from historical data. AI tools like code generators, fixers, and test platforms can automate much of the repetitive labor and even provide better solutions for repeated problems. AI is not creative. AI cannot think outside the box or come up with novel ideas like a human person. AI problem-solving is only as good as its previous learning from historical data.
Human Developers: Human developers are much more innovative and creative. They can think, learn new ideas, and come up with new solutions for highly complex problems. For an unstructured or new problem, human developers are able to use a number of experiences, learn by trial and error, and use creative thinking to develop new solutions, designs, or algorithms. AI is capable of doing repetitive tasks, but for the same work that requires imaginative thinking and novel ideas, there is a need for human developers.
Key Difference: While AI has the ability to automate processes and give data-based answers, it does not have the same sort of creativity and problem-solving potential that human coders possess which goes beyond the data that the AI has been trained on.

2. Contextual Understanding
AI: AI has partial understanding of context to the extent that it is trained. AI can process many inputs rapidly but may struggle with understanding the broad context or being able to cope with highly dynamic environments. For example, even though AI may generate code for a specific request, it can miss the small details of the overall requirements of the project, such as abiding by business objectives or usability.
Human Developers: Human developers are in a good position to see the bigger picture of the project. They have the ability to look above the lines of uncertain or incomplete requirements, read the motivation behind the software, and mold the development process accordingly. Human developers can sit and get the project aligned with business needs, user expectations, and design ideas. Human developers are emotionally intelligent, which puts them in good stead when it comes to interacting with teams, clients, and end-users.
Key Difference: AI may analyze data and come up with solutions based on some input, yet human developers understand context, business objectives, and user needs much better.

3. Adaptability and Learning
AI: AI learns from data but requires enormous quantities of structured data in order to learn and get better at performance. AI models are typically required to be retrained or rebooted in order to deal with novel situations. As an example, AI will struggle if it encounters a novel programming language or a highly different problem. It also relies on human assistance to readjust and calibrate its models should it encounter outliers or abnormal behavior.
Human Developers: Human developers are highly flexible and can learn new technologies, programming languages, and frameworks within a short period. Human developers can experiment, innovate, and learn to make their existing skills adjust to accommodate altering project demands. Developers can also develop their skills through experience and knowledge sharing with other developers so that they remain in the know regarding software development trends. Human developers can change direction rapidly and adjust to evolving project goals or requirements without the need for thorough retraining.
Key Difference: AI systems require enormous datasets and retraining to learn to solve new problems, while human developers are adaptive in nature and can learn and adapt to new problems instantly.

4. Emotional Intelligence and Communication
AI: AI has no emotional intelligence and no ability to understand complex human interaction. Although AI software may be able to code or produce technical recommendations, it is unable to connect with colleagues, clients, or end-users. AI cannot read and respond to feelings or handle the subtleties of human interaction necessary in team environments and client services.
Human Developers: Human developers give emotional intelligence and effective communication. Human developers are able to communicate with customers, learn from them, and simplify technical terms to a nontechnical vocabulary. Developers can communicate with the users for obtaining feedback, obtaining issues clarified, and determining whether the software is user-expectation compliant. Human developers are also skilled at team communication, conflict resolution, and relationship building with the stakeholders, which is essential to project success.
Kery Difference: AI lacks emotional intelligence and people skills, whereas human developers can build relationships, feel emotions, and effectively communicate with teams and clients.

5. Quality Control and Ethical Considerations
AI: While AI has the capacity to test code, detect bugs, and even optimize algorithms automatically, it may overlook some ethical issues, biases, or quality issues that require human judgment. AI learns from historical data, and if the historical data upon which the model was trained is biased or narrow, AI recommendations may carry those faults. In addition, AI cannot decide on value judgments, such as considering ethical issues or long-term implications in software development.
Human Developers: Human developers provide quality checking, decision-making, and moral considerations during the development process. Human developers can detect biases in the AI model, impose compliance with legal and moral standards, and make judgmental decisions beyond the capability of AI. Human developers test software manually, perform code inspection on best practices, and make decisions to meet high-quality levels for the deliverable.
Key Difference: AI can test and optimize well but without human developers' judgment and moral sensitivity in handling complex and hazardous problems.

Conclusion
Even as AI can revolutionize software development with automated trivial work, code generation, and increased efficiency, human developers play a critical role. The differences between AI and human developers are what bring to the forefront the special capabilities of each. AI is more appropriate for those tasks requiring speed, consistency, and processing massive data volumes, while human developers offer imagination, context, flexibility, emotional intelligence, and ethical judgment. 
AI will augment, not substitute, human developers to enable developers to do more higher-level, creative, and multidimensional work. Future software development will be a mix of human imagination and AI-powered tools that lead to quicker, wiser, and more innovative development cycles.
`,
    },
  ];

  const handleButtonHover = (id, isHovered) => {
    setHoveredButtons((prev) => ({
      ...prev,
      [id]: isHovered,
    }));
  };

  const renderBlogCard = (blog) => (
    <div
      key={blog.id}
      className="perspective-1000 h-[450px] group 
        max-md:h-auto max-md:perspective-none 
        max-md:bg-white/10 max-md:rounded-xl max-md:overflow-hidden"
      onMouseEnter={() => setHoveredBlog(blog.id)}
      onMouseLeave={() => setHoveredBlog(null)}
    >
      {/* Desktop Flip Card Effect (Large Screens) */}
      <div
        className={`relative w-full h-full transition-all duration-700 ease-in-out transform-style-3d 
        max-md:hidden
        ${hoveredBlog === blog.id ? "rotate-y-180 scale-105" : "scale-100"}
        group-hover:shadow-2xl`}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden bg-white/10 rounded-xl overflow-hidden flex flex-col">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-[rgb(59,130,246)] mb-2 flex items-center justify-center h-full text-center">
              {blog.title}
            </h3>
            <div className="mt-auto">
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div className="flex items-center text-gray-400">
                  <User size={16} className="mr-2" />
                  <span className="text-sm">{blog.author}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute w-full h-full bg-[#1E293B] rounded-xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden 
          ${hoveredBlog === blog.id ? "" : "hidden"}`}
        >
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-xl font-bold text-[rgb(59,130,246)] mb-4 text-center">
              {blog.title}
            </h3>
            <p className="text-gray-300 mb-4 text-center">{blog.excerpt}</p>
          </div>

          <div>
            <button
              onClick={() => setSelectedBlog(blog)}
              className="relative w-full bg-[rgb(59,130,246)] text-white py-2 rounded-[0.75rem_0rem_0.75rem_0rem] flex items-center justify-center hover:bg-blue-600 transition overflow-hidden"
              onMouseEnter={() => handleButtonHover(blog.id, true)}
              onMouseLeave={() => handleButtonHover(blog.id, false)}
            >
              {/* Wave Effect */}
              <div
                className="wave absolute w-full bg-[rgb(255,255,255,0.2)] left-0 bottom-0 transition-all duration-500 ease-in-out"
                style={{
                  height: hoveredButtons[blog.id] ? "100%" : "0%",
                  zIndex: 0,
                }}
              >
                <div
                  className="wave-before absolute w-full h-[22px] bottom-full left-0"
                  style={{
                    backgroundImage: `url(${waveImageUrl})`,
                    backgroundSize: "contain",
                    animation: "wave 2s linear infinite",
                    zIndex: 0,
                  }}
                />
              </div>
              <span className="relative z-10">Read More</span>
              <ArrowRight className="ml-2 relative z-10" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout (Small and Medium Screens) */}
      <div
        className="hidden max-md:block cursor-pointer"
        onClick={() => setSelectedBlog(blog)}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-[rgb(59,130,246)] mb-2 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {blog.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <User size={16} className="mr-2" />
              <span className="text-xs">{blog.author}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Calendar size={16} className="mr-2" />
              <span className="text-xs">{blog.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlogContent = (blog) => (
    <div className="bg-[#1E293B] rounded-xl overflow-hidden max-w-4xl mx-auto">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover"
      />
      <div className="p-6 md:p-8">
        <button
          onClick={() => setSelectedBlog(null)}
          className="mb-4 flex items-center text-[rgb(59,130,246)] hover:text-blue-400 relative overflow-hidden"
          onMouseEnter={() => handleButtonHover("back", true)}
          onMouseLeave={() => handleButtonHover("back", false)}
        >
          {/* Wave Effect */}
          <div
            className="wave absolute w-full bg-[rgb(255,255,255,0.2)] left-0 bottom-0 transition-all duration-500 ease-in-out"
            style={{
              height: hoveredButtons["back"] ? "100%" : "0%",
              zIndex: 0,
            }}
          >
            <div
              className="wave-before absolute w-full h-[22px] bottom-full left-0"
              style={{
                backgroundImage: `url(${waveImageUrl})`,
                backgroundSize: "contain",
                animation: "wave 2s linear infinite",
                zIndex: 0,
              }}
            />
          </div>
          <ChevronRight className="mr-2 relative z-10" />
          <span className="relative z-10">Back to Blog List</span>
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {blog.title}
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6 text-gray-400 space-y-2 md:space-y-0">
          <div className="flex items-center mr-0 md:mr-6">
            <User size={20} className="mr-2" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={20} className="mr-2" />
            <span>{blog.date}</span>
          </div>
        </div>
        <div className="text-gray-300 leading-relaxed space-y-4">
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {selectedBlog ? "Blog Details" : "Our Latest Blogs"}
        </h1>

        {selectedBlog ? (
          renderBlogContent(selectedBlog)
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map(renderBlogCard)}
          </div>
        )}
      </div>

      {/* Add wave animation styles */}
      <style jsx>{`
        @keyframes wave {
          to {
            background-position-x: 118px;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
