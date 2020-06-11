import styled from 'styled-components';

export const StyledBlogPost = styled.div`
    height: 100vh;
    border-left: .5em solid ${props => props.theme.color.navy};
`
export const BlogContent = styled.div`
    max-width: ${props => props.theme.screen.maxWidth};
    margin: auto;
    h2 {
        margin-top: .25em;
        font-size: 24px;
    }
`

export const Date = styled.h3`
    margin-top: .5em;
    color: #5e9516;
    font-size: 15px;
    font-weight: 400;
`