import React from 'react';

import { StyledNav, NavLogo, NavLinks } from './Nav.styled';

export default class Nav extends React.Component {
    render() {
        return(
            <StyledNav>
                <NavLogo>M</NavLogo>
                <NavLinks>
                    <a href="mailto:markswinimer@gmail.com">contact me</a>
                    <a href="https://www.linkedin.com/in/markswinimer/">linkedin</a>
                    <a href="https://github.com/markswinimer">github</a>
                    {/* <a className="Navbar-link">blog</a> */}
                </NavLinks>
            </StyledNav>
        )
    }
}