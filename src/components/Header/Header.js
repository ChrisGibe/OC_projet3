import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Trans } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";
import React from "react";

import "./Header.css";

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "header" }, extension: { eq: "jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <header className="main-header">
      <div className="img-container">
      <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </div>
      <h1 style={{ textAlign: `center` }}>
          <Trans>{siteTitle}</Trans>
      </h1>
      <span><Trans>Du 5 au 8 août, parc Monceau Paris</Trans></span>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
