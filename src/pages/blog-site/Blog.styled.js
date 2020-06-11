import styled from 'styled-components';

export const StyledBlog = styled.div`
    border: .5em solid ${props => props.theme.color.navy};
    border-bottom: none;
    border-top: none;
    height: 100vh;
    color: ${props => props.theme.color.navy};
`

export const BlogContainer = styled.div`
    margin: auto;
    padding-top: 3em;
    padding: 3em 3em;
    max-width: ${props => props.theme.screen.maxWidth};
`
export const Month = styled.div`
    margin-top: 2em;
    font-size: 24px;
    font-family: ${props => props.theme.font.header};
    border-bottom: 1px solid ${props => props.theme.color.navy};
    padding-bottom: .5em;
    max-width: 850px;
`
export const BlogPosts = styled.div`
    margin-top: 4em;
`

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${props => props.theme.color.navy};
    padding: 1em;
    overflow: hidden;
    max-width: 800px;
`

export const AuthorImage = styled.div`
    max-height: 80px;
    min-width: 80px;
    margin-right: 1em;
    overflow: hidden;
    align-self: center;
    
    img {
        height: 90px;
        width:90px;
    }

`
export const AuthorBlurb = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 20px;
        font-weight: 700;
    }

    p {
        margin-top: .5em;
        line-height: 20px;
    }
`