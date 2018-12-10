import React, { useState } from "react";

import Layout from "../components/Layout";

const IndexPage = () => {
  const [locale, setLocale] = useState({});

  return (
    <Layout>
      <h1>Static JSON GeoIP API</h1>
      <p>
        This is a proof of concept Static JSON GeoIP API using Netlify’s{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com/docs/redirects/#geoip-and-language-based-redirects"
        >
          redirect & rewrite rules
        </a>{" "}
        using country codes (de, us, etc...) to route the response of the{" "}
        <code>GET</code> call to a specific file under a folder structure
        following the below pattern set in their <code>_redirects</code> file.
        See this project's available redirects{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mirshko/netlify-geoip/blob/master/netlify/_redirects"
        >
          here
        </a>
        .
      </p>
      <strong>
        <pre>Entry Path Redirected File Path Status Code Country Code</pre>
      </strong>
      <pre>/locale.json /locales/us.json 200 Country=us</pre>
      <pre>/locale.json /locales/nl.json 200 Language=nl</pre>
      <p>
        Just replicate the above line with a new <em>Redirected File</em> path
        with any JSON formatted data you'd like, keep the <em>Status Code</em>{" "}
        the same for all the redirects for this, and then change your desired{" "}
        <em>Country Codes</em> from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.maxmind.com/geoip/legacy/codes/iso3166/"
        >
          this list
        </a>{" "}
        and even language codes{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.metamodpro.com/browser-language-codes"
        >
          from here
        </a>
        .
      </p>
      <p>
        Be sure to test your redirects at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://play.netlify.com/redirects"
        >
          Netlify's Playground
        </a>{" "}
        to make sure you've formatted them correctly.{" "}
        <em>
          Note: adding too many of these redirects will eventually slow down
          your site all-together.
        </em>
      </p>

      <h3>Test The Endpoint</h3>
      <p>
        The button simply does a <code>fetch</code> call on{" "}
        <code>/locales.json</code> and then returns the current locale within
        the contraints of the setup redirects.
      </p>
      <p>
        <code>de.json ~> {'{ "locale": "Germany" }'}</code>
      </p>

      <h4>Hello {locale.locale}</h4>
      <button
        onClick={() =>
          fetch("/locale.json")
            .then(res => res.json())
            .then(data => setLocale(data))
            .catch(err => console.error("Error fetching data from /locale.json endpoint"))
        }
      >
        Fetch locale
      </button>
    </Layout>
  );
};

export default IndexPage;
