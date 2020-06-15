import React from 'react';
import { StyledBurger } from './Burger.styled';

// const Burger = ({ open, setOpen, props }) => {
const Burger = (props) => {

    return (
        // <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <StyledBurger onClick={props.handleClick} open={props.open}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;
