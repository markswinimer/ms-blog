import styled from 'styled-components';

export const StyledDivider = styled.div`
    position: relative;
    margin: auto;
    border: none;

    > * {
      width: 75px;
    }
`
export const DividerTopShape = styled.div`
  margin:auto;
  position: relative;
  top: ${props => props.topColor == "white" ? "25px" : "-20px"};
  right: ${props => props.topColor == "white" ? "2px" : "7px"};
  box-sizing: border-box;
  /* border-top: 20px solid ${props => props.theme.color.navy}; */
  transform: rotate(45deg);
`
export const DividerBottomShape = styled.div`
  position: relative;
  top: ${props => props.topColor == "white" ? "15px" : "-25px"};
  right: ${props => props.topColor == "white" ? "20px" : "20px"};
  margin: auto;
  box-sizing: border-box;
  border-top: 20px ${props => props.theme.color.white} solid;
  transform: rotate(45deg);
`