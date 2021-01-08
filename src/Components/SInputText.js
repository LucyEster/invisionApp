import React, { Component } from "react";
import styled from "styled-components";
import {colors} from "../assets/colors";

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
  width:  260px;
  border: 0px solid white;
  border-bottom: 1px solid ${props => props.valid ?  colors.primary : colors.error};
  margin: ${props => props.size};
  margin-left: 0px;
  margin-top: 0px;
  padding: ${props => props.size};
  font-family: "MulishRegular";
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
