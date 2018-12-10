import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import favicon from "../../images/favicon.ico";

import Corner from "../Corner";

import "modern-normalize";
import "./index.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link rel="icon" href={favicon} />
          <meta
            name="description"
            content="This is a proof of concept Static JSON GeoIP API using Netlify’s redirect & rewrite rules."
          />
          <meta name="author" content="mirshko <jeff@reiner.design>" />
          <html lang="en" />
        </Helmet>
        <Corner />
        <>{children}</>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
