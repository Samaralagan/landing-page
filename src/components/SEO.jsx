// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, canonicalUrl, schema }) => {
  return (
    <Helmet>
      <title>Calabria Technology</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default SEO;
