import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

import Nav from '../sites/portfolio-site/Nav';

const Header = ({ siteTitle }) => (
  <header>
    <Helmet title={siteTitle} defer={false} />
    <Nav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
