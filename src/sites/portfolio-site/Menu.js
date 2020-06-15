import React from 'react';
import Link from 'gatsby-link';

import { StyledMenu, MenuContainer, MenuLink } from './Menu.styled';

const Menu = (props) => {
    return (
        <MenuContainer open={props.open}>
            <StyledMenu>
                <MenuLink onClick={props.handleClick} to={"/"}>Home</MenuLink>
                <MenuLink onClick={props.handleClick} to={"/blog"}>Blog</MenuLink>
                <MenuLink onClick={props.handleClick} href="https://www.linkedin.com/in/markswinimer/">linkedin</MenuLink>
                <MenuLink onClick={props.handleClick} href="https://github.com/markswinimer">github</MenuLink>
            </StyledMenu>
        </MenuContainer>
    )
}
export default Menu;

// const MenuLink = props => {
//     return (
//         <StyledMenuLink
//             active={props.currentPage === props.path}
//             to={props.path}
//             onClick={() => props.setOpen(props.open)}>
//             <FontAwesomeIcon className="icon" icon={props.icon} />
//             {props.name}
//         </StyledMenuLink>
//     )
// }