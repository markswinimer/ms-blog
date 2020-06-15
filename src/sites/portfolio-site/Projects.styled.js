import styled from 'styled-components';

export const StyledProjects = styled.div`
max-width: 725px;
margin: auto;
padding: 9em 2.5em;
display: flex;
flex-direction: column;
justify-content: center;
min-height: 500px;
display: flex;
vertical-align: middle;
color: ${props => props.theme.color.navy};

h1 {
    font-size: 2.5rem;
}
h2 {
    font-family: ${props => props.theme.font.subheader};
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: .5em;
    margin-bottom: 0;
}
p {
    margin-top: .5em;
}
    @media (max-width: ${props => props.theme.screen.mobile}) {
        padding: 4em 1.5em;
    }
`

export const ProjectCard = styled.div`
    flex: 1;
    padding: 2rem;
    margin-top: 2rem;
    min-height: 200px;
    justify-content: space-between;
    color: ${props => props.theme.color.navy};
    background-color: ${props => props.theme.color.white};
    border: 1px solid ${props => props.theme.color.navy};
    border-radius: .45rem;
    display: flex;
    flex-direction: column;
    transition: .1s ease-in;
    cursor: pointer;

    .icon {
        font-size: 2rem;
        color: ${props => props.theme.color.navy};
        transition: .1s ease-in;
    }

    h2 {
        font-weight: 700;
        // font-size: 1.75rem;
    }
    h4 {
        font-size: 1.2rem;
    }

    :nth-child(even) {
        margin-left: 2rem;
        @media (max-width: 706px) {
            margin-left: 0;
        }
    }


    :hover {
        color: ${props => props.theme.color.white};
        background-color: ${props => props.theme.color.navy};

        .icon {
            color: ${props => props.theme.color.white};
        }
    }

    @media (max-width: ${props => props.theme.screen.mobile}) {
        padding: 3em 1.5em;
        width: 100%;
    }
`

export const ProjectCardTags = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;

    h4 {
        font-weight: 400;
        font-size: 1rem;
        margin-left: 1rem;
    }
`

export const ProjectCardLinks = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;

    .icon {
        margin-right: 1rem;
    }
    .icon:hover {
        color: #EBCC6E !important;
        font-weight: 500;
        }
`

export const ProjectsGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`