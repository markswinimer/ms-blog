import styled from 'styled-components';

export const StyledBlog = styled.div`
    border: .5em solid ${props => props.theme.color.navy};
    border-bottom: none;
    border-top: none;
    color: ${props => props.theme.color.navy};
    margin: auto;
    padding: 3em;
    padding-top: 1em;
    min-height: 100vh;
    max-width: 100vw;

    h1 {
        font-size: 40px;
        letter-spacing: 1.5px;
       font-family: "Frank Ruhl Libre";
       font-weight: 400;

    }

    h2 {
       font-size: 30px; 
       font-weight: 700;
    }

    h3 {
        margin-top: .5em;
        font-family: "Barlow";

    }
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

    @media (max-width: ${props => props.theme.screen.mobile}) {
        padding: 1.5em;
    }  
`
export const BlogContainer = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: auto;
`
export const IntroSectionContainer = styled.div`
    /* color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.navy}; */
    max-width: 750px;
    border-bottom: 1px solid ${props => props.theme.color.navy};
    padding-bottom: 1.5em;
`
export const IntroSection = styled.div`
    /* color: ${props => props.theme.color.white}; */
    max-width: 750px;

`

export const PageContent = styled.div`
    padding-top: 0em;
    display: flex;
    flex-direction: column;

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
    max-width: 750px;
    border-bottom: 1px solid ${props => props.theme.color.navy};
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
    /* color: ${props => props.theme.color.white}; */
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
        font-family: "Barlow";

        line-height: 20px;
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    /* border-top: 1px solid ${props => props.theme.color.navy}; */
    max-width: 750px;

    h2 {
        /* color: #EB6841; */
        font-size: 23px;
    }

    /* flex-direction: row; */
    /* border: 1px solid ${props => props.theme.color.navy}; */
    padding: 1em;
    margin-top: 2em;

    background-color: #f5f5f5;
    /* margin-top: auto; */
`

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid ${props => props.theme.color.navy}; */
    overflow: hidden;
    h2 {
        
    }
`
export const ReadMore = styled.div`
    display: flex;
    flex-direction: column;
    padding: .75em 1em;
    border-radius: 3px;
    background-color: #f5f5f5;
    margin-top: .5em;

    h2 {
        font-size: 20px;
        font-weight: 700;
    }

    p {
        line-height: 20px;
    }
`