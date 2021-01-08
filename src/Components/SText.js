import React, { Component } from "react";
import styled from "styled-components";
import {colors} from "../assets/colors";
import Flex from '@react-css/flex';

const STitle = styled.div`
color: ${colors.black};
font-size: 2rem;
font-family: "MulishRegular";
margin: 1rem;
padding: 0.5rem 4rem;
`;

const STitleLight = styled.div`
color: ${colors.white};
font-size: 1rem;
font-family: "MulishRegular";
margin-top: 2rem;
padding: 0rem 0rem;
`;

const SSubtitle = styled(STitle)`
    color: ${colors.primary};
    font-size: 1rem;
    font-family: "MulishRegular";
    margin: 1rem;
    padding: 0.5rem 4rem;
`;

const SRegular = styled(STitle)`
    color: ${colors.regularLight};
    font-size: 0.7rem;
    margin: 0.2rem;
    padding: 0.2rem 0.2rem;
    font-family: "MulishRegular";
    font-weight: 'bold';
`;

const SError = styled(SRegular)`
    color: ${colors.error};
`;

export {STitle, STitleLight, SSubtitle, SRegular, SError};
