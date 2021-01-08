import React, { Component } from "react";
import styled from "styled-components";
import {colors} from "../assets/colors";
import {dimensions} from "../assets/dimensions"
import Flex from '@react-css/flex';

const STitle = styled.div`
color: ${colors.black};
font-size: ${dimensions.lblTitleFontSize};
font-family: ${dimensions.fontFamily};
margin: ${dimensions.lblTitleMargin};
padding: ${dimensions.lblTitlePadding};
`;

const SSubtitle = styled(STitle)`
    color: ${colors.primary};
    font-size: ${dimensions.lblSubtitlefontSize};
    margin: ${dimensions.lblSubtitlemargin};
`;

const STitleLight = styled(SSubtitle)`
color: ${colors.white};
padding: ${dimensions.lblTitleLightPadding};
`;

const SRegular = styled(STitle)`
    color: ${colors.regularLight};
    font-size: ${dimensions.lblRegularfontSize};
    margin: ${dimensions.lblRegularMargin};
    padding: ${dimensions.lblRegularPadding};
`;

const SError = styled(SRegular)`
    color: ${colors.error};
`;

export {STitle, STitleLight, SSubtitle, SRegular, SError};
