import PropTypes from "prop-types"
import React from "react"

import Nav from '../react/portfolio-site/Nav';

const Header = ({ siteTitle }) => (
  <header>
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
