import styled from 'styled-components';

export const StyledBurger = styled.div`

    @media (max-width: ${props => props.theme.screen.mobile}) {
        display: ${props => props.display ? 'none' : 'flex'};
        }   

    position: absolute;
    top: 3.5em;
    right: 3em;
    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-around;
    width: 3em;
    height: 3em;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 3em;
        height: 0.315rem;
        border-radius: 12px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        background: ${props => props.theme.color.navy};

    }
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: flex;
        }
`
