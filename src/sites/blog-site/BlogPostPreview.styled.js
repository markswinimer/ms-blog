import styled from 'styled-components';

export const BlogPostPreview = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;

    display: flex;
    flex-direction: column;
    h2 {
        margin-top: .25em;
        font-size: 22px;
    }

    h4 {
        color: #EB6841;
        font-size: 15px;
        font-weight: 400;
    }
`

export const Category = styled.h3`
    font-weight: 300;
    font-size: 14px;
    color: #EB6841;
    font-family: "Barlow";

`

export const Date = styled.h3`
    margin-top: .5em;
    font-size: 15px;
    font-style: italic;
    h3 {
        color: #EB6841;
    font-family: "Barlow";

    }
`

export const Excerpt = styled.p`
    line-height: 20px;
    margin-top: .6em;
    font-family: "Barlow";

`
export const ReadMore = styled.h3`
    font-family: "Barlow";
    /* margin-top: 0; */
    font-weight: 400;
    margin-right: auto;
    border-bottom: 2px solid ${props => props.theme.color.navy};
`