import styled from 'styled-components';

// Main Portfolio
export const StyledPortfolio = styled.div`
  border: .5em solid ${props => props.theme.color.navy};
`
// Title Section
export const Title = styled.div`
    height: 370px;
    text-align: center;
    min-height: 300px;
    margin: auto;
    max-width: ${props => props.theme.screen.maxWidth};
    padding: ${props => props.theme.screen.defaultPadding} + 2em;
    padding-top: 5.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    vertical-align: middle;
    flex-direction: column;

    @media (max-width: 700) {
        text-align: left;
        align-items:baseline;
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

// AboutMe Section
export const AboutMe = styled.div`
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.navy};
  padding: 9rem 2.5rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  justify-content: center;
`

export const AboutMeLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
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
    // max-width: 50%;
    width: 150px;
    flex-shrink: none;
    transition: .2s;
  }

  :hover {
    filter: hue-rotate(120deg) grayscale(.3) brightness(1.2);
  }
`

export const AboutMeRightSection = styled.div`
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
`

