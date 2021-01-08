import React, { Component } from "react";
import styled from "styled-components";
import {colors} from "../assets/colors";
import {dimensions} from "../assets/dimensions";
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
    border: ${dimensions.btnBorder} solid ${colors.primary};
    border-radius: ${dimensions.btnRadius};
    color: ${colors.white};
    font-size: ${dimensions.btnfontSize};
    margin: ${dimensions.btnMargin};
    font-family: ${dimensions.fontFamily};
    padding: ${dimensions.btnPadding};
`;

const GmailButton = styled(SButton)`
    background: ${colors.white};
    color: ${colors.primary};
    padding: ${dimensions.gbtnPadding} ;
`;

export {SButton, GmailButton};
