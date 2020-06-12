import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { StyledFooter, FooterContact, FooterIcons } from './Footer.styled';

const Footer = (props) => {
    return(
        <StyledFooter>
            <FooterIcons>
                <a href="github.com/markswinimer"><FaGithub className="icon"/></a>
                <a href="linkedin.com/in/markswinimer"><FaLinkedin className="icon"/></a>
            </FooterIcons>
            <FooterContact>
                <p>2019 Mark Swinimer</p>
                <p>markswinimer@gmail.com</p>
            </FooterContact>
        </StyledFooter>
    )
}

export default Footer;
