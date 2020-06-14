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
    padding-top: 3.5em;

    max-width: ${props => props.theme.screen.maxWidth};


    h2 {
       font-size: 29px; 
       font-weight: 700;
       font-family: "PT Sans Narrow";
    }
    h4 {
        color: #EB6841;
        font-size: 15px;
        font-weight: 400;
    }
`

export const BlogPostPreview = styled.div`
    margin-top: 2em;

    h2 {
        margin-top: .25em;
        font-size: 24px;
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
    margin-top: .5em;
    font-size: 15px;
    font-style: italic;
    h3 {
        color: #EB6841;
    }
`
export const PostContent = styled.div`
    margin-top: 1em;

    h2 {
        font-family: ${props => props.theme.font.subheader};
        font-size: 22px;
        font-weight: 700;
        margin-top: 2em;
    }

    p {
        /* line-height: 20px; */
        margin-top: 1em;
        font-size: 20px;
        font-family: "Barlow";
        font-weight: 300;
    }
`
