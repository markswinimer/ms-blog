import styled from 'styled-components';

export const StyledNav = styled.div`
  padding: ${props => props.theme.screen.contentPadding};
  border: .5em solid ${props => props.theme.color.navy};
  border-bottom: none;
  background-color: ${props => props.theme.color.white};

  @media (max-width: ${props => props.theme.screen.mobile}) {
      padding: 1.5em;
  }
`

export const NavContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  max-width: ${props => props.theme.screen.maxWidth};
`

export const NavLogo = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px 10px;
  border-radius: 2px;
  background-color: ${props => props.theme.color.navy};
  color:  ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.header};;
  font-size: 40px;
  line-height: 50px;

`

export const NavLinks = styled.div`
  margin-top: auto;
  margin-left: auto;

  a {
    text-decoration: none;
    color: ${props => props.theme.color.navy};
    font-family: ${props => props.theme.font.subheader};
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 2rem;
    border-bottom: 1px solid  ${props => props.theme.color.navy};
    padding-bottom: .1rem;
    transition: .2s ease-in;
  }

  a:hover {
    font-weight: 700;

  }
  @media (max-width: ${props => props.theme.screen.mobile}) {
      display: none;
  }
`