import React, { Component } from "react";
import styled from "styled-components";
import {colors} from "../assets/colors";
import {dimensions} from "../assets/dimensions";

const SInput = styled.input.attrs(props => ({
  type: "text",
  name: "email",
  id: "email",
  size: props.size || "1em",
  error: props.error,
  onChange: props.onChange,
  input: props.input,
  placeholder:"Enter email",
  value: props.value,
  valid: props.valid,
}))`
  width: ${dimensions.inptWidth} ;
  border: ${dimensions.inptBorder} solid white;
  border-bottom: ${dimensions.inptBorderBottom} solid ${props => props.valid ?  colors.primary : colors.error};
  margin: ${props => props.size};
  margin-left: ${dimensions.inptMarginLeft};
  margin-top: ${dimensions.inptMarginTop};
  padding: ${props => props.size};
  font-family: ${dimensions.fontFamily};
`;

const SPasswordInput = styled(SInput).attrs({
  type: "password",
  name: "password",
  id: "password",
  placeholder:"Enter password"
})`
`;

const STextInput = styled(SInput).attrs({
  type: "text",
  name: "text",
  id: "text",
  placeholder:"Enter full name"
})`
`;

export {STextInput, SInput, SPasswordInput};
