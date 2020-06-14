import styled from 'styled-components';

export const StyledBlog = styled.div`
    border: .5em solid ${props => props.theme.color.navy};
    border-bottom: none;
    border-top: none;
    min-height: 100vh;
    color: ${props => props.theme.color.navy};
    padding-top: 1em;

    h1 {
        font-size: 40px;
        letter-spacing: 1.5px;
       font-family: "PT Sans Narrow";
       font-weight: 700;

    }

    h2 {
       font-size: 29px; 
       font-weight: 700;
    }

    h3 {
        margin-top: .5em;
    }
`
export const IntroSectionContainer = styled.div`
      /* color: ${props => props.theme.color.white};
      background-color: ${props => props.theme.color.navy}; */
      padding: 1em;
`
export const IntroSection = styled.div`
    margin: auto;
    max-width: ${props => props.theme.screen.maxWidth};
          color: ${props => props.theme.color.white};
      background-color: ${props => props.theme.color.navy};
      padding: 2em;
`

export const BlogContainer = styled.div`
    margin: auto;
    padding: 3em 3em;
    padding-top: 0em;

    max-width: ${props => props.theme.screen.maxWidth};

    h1 {
        font-size: 35px;
    }

    h2 {
       font-size: 29px; 
       font-weight: 700;
       font-family: "PT Sans Narrow";
    }

    h3 {
        margin-top: .5em;
    }
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

`

export const Intro = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid ${props => props.theme.color.navy}; */
    overflow: hidden;
    /* max-width: 800px; */
    margin-top: 1em;
    /* padding: .75em 0em; */
    border-radius: 3px;
    color: ${props => props.theme.color.white};
    /* background-color: #f5f5f5; */
    
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
export const IntroBlurb = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 20px;
        font-weight: 700;
    }

    p {
        line-height: 25px;
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
        line-height: 20px;
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${props => props.theme.color.navy};
    max-width: 800px;
    margin-top: 3em;
    padding-top: 3em;

    h2 {
        color: #EB6841;
    }

`

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid ${props => props.theme.color.navy}; */
    overflow: hidden;
    max-width: 800px;
    margin-top: 1em;
    padding: .75em 1em;
    border-radius: 3px;
    background-color: #f5f5f5;
`
export const ReadMore = styled.div`
    display: flex;
    flex-direction: column;
    padding: .75em 1em;
    border-radius: 3px;
    background-color: #f5f5f5;
    margin-top: 1em;

    h2 {
        font-size: 20px;
        font-weight: 700;
    }

    p {
        line-height: 20px;
    }
`


export const Spacing = styled.div`
    margin-top: 10em;
`