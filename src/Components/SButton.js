import React, { Component } from "react";
import styled from "styled-components";
import {colors} from "../assets/colors";
import Icon from "./Icon";
import Flex from '@react-css/flex';

class GButton extends Component {

  constructor(props){
    super(props)
  }

    render() {

      const { icon } = this.props;

        return(
            <button enabled={this.props.enabled} className={ this.props.className } onClick={ this.props.onClick || this.click }>
            <Flex row alignItemsCenter>
                {icon && <Icon type={icon}/>}
                { this.props.children }
            </Flex>
            </button>

        );
    }

    click() {
        alert("Sign In clicked");
    }

}

const SButton = styled(GButton)`
    background:  ${colors.primary} ;
    border: 1px solid ${colors.primary};
    border-radius: 60px;
    color: ${colors.white};
    font-size: 0.7rem;
    margin: 1rem;
    font-family: "MulishRegular";
    padding: 0.5rem 4rem;
`;

const GmailButton = styled(SButton)`
    background: ${colors.white};
    border: 1px solid ${colors.primary};
    border-radius: 60px;
    color: ${colors.primary};
    font-size: 0.7rem;
    font-family: "MulishRegular";
    margin: 1rem;
    padding: 0.2rem 2rem;
`;

export {SButton, GmailButton};
