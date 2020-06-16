import React from 'react';
import Link from 'gatsby-link';

import Burger from './Burger';
import Menu from './Menu';

import { StyledNav, NavLogo, NavLinks, NavContainer } from './Nav.styled';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerMenuOpen: false
        }
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen() {
        console.log("this.state here")
        const { burgerMenuOpen } = this.state;
        this.setState({ burgerMenuOpen: !burgerMenuOpen })
    }

    render() {
        return(
            <StyledNav>
                <NavContainer>  
                    <Link to={"/"}>
                        <NavLogo>M</NavLogo>
                    </Link>
                    <NavLinks>
                        <Link to={"/blog"}>blog</Link>
                        <a href="https://www.linkedin.com/in/markswinimer/">linkedin</a>
                        <a href="https://github.com/markswinimer">github</a>
                    </NavLinks>
                    <Burger handleClick={this.toggleOpen} open={this.state.burgerMenuOpen}/>
                    <Menu handleClick={this.toggleOpen} open={this.state.burgerMenuOpen}/>
                </NavContainer>
            </StyledNav>
        )
    }
}