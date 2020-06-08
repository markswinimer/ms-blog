import React from 'react';
import Link from 'gatsby-link';

import { StyledNav, NavLogo, NavLinks, NavContainer } from './Nav.styled';

export default class Nav extends React.Component {
    render() {
        return(
            <StyledNav>
                <NavContainer>
                <NavLogo>M</NavLogo>
                <NavLinks>
                    <Link to={"/blog"}>my blog</Link>
                    <a href="mailto:markswinimer@gmail.com">contact me</a>
                    <a href="https://www.linkedin.com/in/markswinimer/">linkedin</a>
                    <a href="https://github.com/markswinimer">github</a>
                    {/* <a className="Navbar-link">blog</a> */}
                </NavLinks>
                </NavContainer>
            </StyledNav>
        )
    }
}