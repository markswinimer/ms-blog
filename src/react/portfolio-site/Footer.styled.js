import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.navy};
  padding: .5em 1em;
  padding-top: 1em;
`

export const FooterIcons = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: flex-end;
 
  .icon {
    color: ${props => props.theme.color.white};
    margin-right: .75em;
    font-size: 22px;
  }
`

export const FooterContact = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: auto;

  p {
    font-size: 12px;
    line-height: 1em;
  }
`