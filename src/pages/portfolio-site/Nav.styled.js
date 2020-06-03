import styled from 'styled-components';

export const StyledNav = styled.div`
  max-width: ${props => props.theme.screen.maxWidth};
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: ${props => props.theme.screen.contentPadding};;
`

export const NavLogo = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px 10px;
  margin-right: auto;
  border-radius: 2px;
  background-color: ${props => props.theme.color.navy};
  color:  ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.header};;
  font-size: 40px;
  line-height: 50px;
`

export const NavLinks = styled.div`
  margin-top: auto;
  a {
    text-decoration: none;
    color: ${props => props.theme.color.navy};
    font-family: ${props => props.theme.font.subheader};
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 1.5rem;
    border-bottom: 1px solid  ${props => props.theme.color.navy};
    padding-bottom: .1rem;
    transition: .2s ease-in;
  }

  a:hover {
    // border-bottom: 2px solid  ${props => props.theme.color.navy};
    letter-spacing: .5px;
    font-weight: 700;

  }
`