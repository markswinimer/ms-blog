import styled from 'styled-components';
import Link from 'gatsby-link';

export const MenuContainer = styled.div`
    width: 100%;
    flex-direction: row;
    padding-top: 4em;
    display: ${props => props.open ? "flex" : "none"};
    position: absolute;
    right: 3em;
`

export const StyledMenu = styled.div`
    width: 150px;
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.navy};
    display: flex;
    flex-direction: column;
    border: 2px solid ${props => props.theme.color.navy};
    margin-left: auto;

    a {
        margin-right: 0;
    }
    a:last-of-type {
        border-bottom: none;
    }
`
export const MenuLink = styled(Link)`
    display: flex;
    font-weight: 700;
    font-family: "PT Sans Narrow";
    font-size: 17px;
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.navy};
    flex-direction: row;
    justify-content: right;
    vertical-align: middle;
    align-items: center;
    height: 4em;
    padding-left: 1em;
    transition: .1s ease-in;
    border-bottom: 1px solid ${props => props.theme.color.navy};
    cursor: pointer;
    
    :hover {
        color: red;
    }
`