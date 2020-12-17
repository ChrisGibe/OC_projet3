import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/Navbar'
import './Layout.css';

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavBar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          minHeight: `100vh`,
          padding: `0 1.0875rem 1.45rem`
        }}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
