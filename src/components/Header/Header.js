import {Link } from 'gatsby';
import {Trans} from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import './header.css';
import React from 'react';

const Header = ({siteTitle}) => {
  return (
    <header className="main-header">
      <h1 style={{textAlign: `center`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}>
          <Trans>{siteTitle}</Trans>
        </Link>
      </h1>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
