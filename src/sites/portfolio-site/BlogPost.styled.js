import styled from 'styled-components';

export const StyledBlogPost = styled.div`
    border: .5em solid ${props => props.theme.color.navy};
    border-bottom: none;
    border-top: none;
    min-height: 100vh;
    color: ${props => props.theme.color.navy};
`
export const BlogContent = styled.div`
    margin: auto;
    padding: 3em 3em;
    padding-top: 1.5em;
    
    max-width: ${props => props.theme.screen.maxWidth};

    h2 {
       font-size: 33px; 
       font-weight: 400;
       font-family: "Frank Ruhl Libre";
    }
    h4 {
        color: #EB6841;
        font-size: 15px;
        font-weight: 400;
    }
`

export const Category = styled.h3`
    font-weight: 300;
    color: #EB6841;
`

export const Date = styled.h3`
    font-size: 15px;
    font-style: italic;
    font-family: "Barlow";
    margin-left: 1em;
    margin-top: 1em;

    strong {
        font-style: normal;
        margin-right: .5em;
        font-weight: 600;
    }
`
export const PostContent = styled.div`
    max-width: 750px;

    h2 {
        font-weight: 700;
        font-family: "PT Sans Narrow";
        font-size: 26px;
        margin-top: 1.5em;
    }
        h2:last-child {
        margin-bottom: 0em;
    }
    p {
        /* line-height: 29px; */
        margin-bottom: 1em;
        font-size: 20px;
        font-family: "Barlow";
        font-weight: 300;
    }
    p:first-of-type {
        margin-top: 1em;
    }
`
