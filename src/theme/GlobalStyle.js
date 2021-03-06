import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
    screen: {
        maxWidth: "1000px",
        defaultPadding: "1rem",
        contentPadding: "2.5rem",
        mobile: "800px"
    },
    color: {
        navy: '#2a363b',
        white: '#fafafa'
    },
    font: {
        header: "Oleo Script, Display",
        subheader: "PT Sans Narrow, Display",
        subheaderAlt: "Nunito, Display",
        copy: "Barlow, Display"
    }
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    background-color: ${props => props.theme.color.white};
    
    a {
        text-decoration: none;
        color: inherit;
    }
    h1 {
        font-family: ${props => props.theme.font.header};
        font-weight: 400;
    }
    h2 {
        font-family: ${props => props.theme.font.subheader};
        font-weight: 500;
    }
    h3 {
        font-family: ${props => props.theme.font.subheader};
        font-weight: 400;
    }
    h4 {
        font-family: ${props => props.theme.font.subheader};
        font-weight: 100;
    }

    p {
        font-family: ${props => props.theme.font.copy};
        font-weight: 400;
        line-height: 2rem;
    }
    li {
        color: ${props => props.theme.color.navy};
        font-family: ${props => props.theme.font.copy};
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2rem;
    }

    strong {
        font-weight: bold;
    }
`
export default GlobalStyle;