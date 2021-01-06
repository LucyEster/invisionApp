import React, { Component } from "react";
import styled from "styled-components";
import {colors} from "../assets/colors";

class GButton extends Component {

    render() {
        return(
            <button className={ this.props.className } onClick={ this.click }>{ this.props.children }</button>
        );
    }

    click() {
        alert("Ola");
    }

}

const SButton = styled(GButton)`
    background:  ${colors.primary} ;
    border: 2px solid ${colors.primary};
    border-radius: 60px;
    color: ${colors.white};
    font-size: 1rem;
    margin: 1rem;
    font-family: "MulishRegular";
    padding: 0.5rem 4rem;
`;

const GmailButton = styled(SButton)`
    background: ${colors.white};
    border: 2px solid ${colors.primary};
    border-radius: 60px;
    color: ${colors.primary};
    font-size: 1rem;
    font-family: "MulishRegular";
    margin: 1rem;
    padding: 0.5rem 4rem;
`;

export {SButton, GmailButton};
