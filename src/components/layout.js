import React from 'react';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from '../sites/portfolio-site/Footer';
import Nav from '../sites/portfolio-site/Nav';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../theme/GlobalStyle';

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
        <Header siteTitle="Mark Swinimer" />
          <main>{children}</main>
        <Footer/>
      <GlobalStyle />

    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
