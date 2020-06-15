import styled from 'styled-components';

// Main Portfolio
export const StyledPortfolio = styled.div`
  border: .5em solid ${props => props.theme.color.navy};
  border-top: none;
  
  h1 {
    font-size: 40px;
  }

  h2 {
    font-family: ${props => props.theme.font.subheader};
    font-size: 1.5em;
    font-weight: 300;
    margin-top: .5rem;
    margin-bottom: .5rem;
  }

  p {
      margin-top: 15px;
      font-size: 19px;
      font-weight: 300;
  }
`

export const Section = styled.div`
    display: flex;
    padding: 9em 2.5em;
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.navy};

    h1 {
        font-size: 40px;
    }
    
    p {
       margin-top: 15px;
       font-size: 19px;
       font-weight: 300;
    }

    @media (max-width: ${props => props.theme.screen.mobile}) {
      padding: 3em 1.5em;
    }
`
//#region Title Section
export const Title = styled.div`
    height: 370px;
    text-align: center;
    min-height: 300px;
    margin: auto;
    max-width: ${props => props.theme.screen.maxWidth};
    padding: ${props => props.theme.screen.defaultPadding} + 2em;
    display: flex;
    justify-content: center;
    align-items:center;
    vertical-align: middle;
    flex-direction: column;
    padding: 0 2em;
    padding-top: 5.5rem;

    @media (max-width: ${props => props.theme.screen.mobile}) {
        padding: 0 1.5em;
        padding-top: 1em;
    }
`

export const TitleName = styled.div`
  margin-top: 1rem;
  color: ${props => props.theme.color.navy};

  h1 {
    font-size: 72px;
    line-height: 72px;
    margin: auto;
  }
  h2 {
    margin-top: .5rem;
    font-size: 1.7rem;
  }
`

export const TitleAbout = styled.div`
    margin: auto;
    color: ${props => props.theme.color.navy};
    max-width: 700px;
    margin-top: 3rem;
    font-family: ${props => props.theme.font.subheader};
    font-size: 1.7rem;
    font-size: 1.25rem;

    @media (max-width: 700) {
        margin-top: 1rem;
    }
`
//#endregion

//#region About Me Section

export const AboutMe = styled(Section)`
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.navy};
  margin: auto;
  flex-direction: row;
  vertical-align: middle;
  justify-content: center;

    @media (max-width: ${props => props.theme.screen.mobile}) {
      flex-direction: column;
    }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  
      @media (max-width: ${props => props.theme.screen.mobile}) {
      flex-direction: column;
    }
`
export const AboutMeProfileImage = styled.div`
  overflow: hidden;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin-right: 4em;
  margin-left: 3em;
  transition: .3s ease-in-out;
  filter: hue-rotate(0deg) grayscale(.5) brightness(1);
  
  img {
    width: 150px;
    flex-shrink: none;
    transition: .2s;
  }

  :hover {
    filter: hue-rotate(120deg) grayscale(.3) brightness(1.2);
  }
      @media (max-width: ${props => props.theme.screen.mobile}) {
        margin: 0;
        margin: auto;
        /* border-radius: 50%; */
      }
`

export const RightSection = styled.div`
    flex-grow: auto;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.color.white};

    h1 {
        font-size: 40px;
    }
    
    p {
       margin-top: 15px;
       font-size: 19px;
       font-weight: 300;
    }
    @media (max-width: ${props => props.theme.screen.mobile}) {
      margin-top: 2em;
      max-width: 100%;
      /* text-align: center; */
    }
`
//#endregion

//#region Contact Me Section
export const ContactMe = styled(Section)`
  text-align: center;
  color: ${props => props.theme.color.navy};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9rem 2.5rem;
`

export const Paragraph = styled.div`
    max-width: 700px;
    margin-top: 2em;

`

export const ContactMeButton = styled.div`
  max-width: 125px;
  margin: 0 auto;
  margin-top: 2em;
  padding: .5em .5em;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.color.navy};
  border: 1px solid ${props => props.theme.color.navy};
  cursor: pointer;
  transition: .2s ease-in;
  font-family: ${props => props.theme.font.subheader};
  
  :hover {
      color: ${props => props.theme.color.white};
      background-color: ${props => props.theme.color.navy};
      border: 1px solid ${props => props.theme.color.white};
  }
`
//#endregion

//#region 
  
export const Learning = styled.div`
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.navy};
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  justify-content: center;
  vertical-align: middle;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
  padding: 9rem 2.5rem;

      @media (max-width: ${props => props.theme.screen.mobile}) {
        padding: 3em 1.5em;
        flex-direction: column;
    }
`

export const LearningMediaQ = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-left: 6px solid white;
  border-radius: 2px;
  margin-top: 2em;
  padding: .5em 1em;
  padding-bottom: 1em;
  flex-basis: 1;
  align-self: flex-start;

  li {
    color: ${props => props.theme.color.white};
    margin: none;
    padding: none;
    margin-top: .25em;
    font-size: 1.1rem;
  }
    @media (max-width: ${props => props.theme.screen.mobile}) {
        display: flex;
    }
`
export const LearningLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-radius: 3px;
  margin-top: .25rem;
  padding: .5em 1em;
  padding-bottom: 1em;
  margin-right: 3em;
  flex-basis: 1;
  align-self: flex-start;

  p {
    margin: none;
    padding: none;
    margin-top: .25em;
    font-size: 1.1rem;
  }
    @media (max-width: ${props => props.theme.screen.mobile}) {
        display: none;
    }
`
export const LearningRightSection = styled.div`
  flex-grow: auto;
  max-width: 500px;
`
//#endregion