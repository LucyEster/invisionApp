import React, { Component } from 'react';
import styled from 'styled-components';
import {SButton, GmailButton} from "./SButton";
import {SInput, SPasswordInput} from "./SInputText";
import {STitle, SSubtitle, SRegular} from "./SText";
import {colors} from "../assets/colors";
import Flex from '@react-css/flex';

const Separator = styled.div`
color: ${colors.white};
border-top: 1px solid ${colors.regularLight};
font-size: 1rem;
font-family: "MulishRegular";
margin: 0.5rem;
padding: 0rem 0rem;
width: 6em;
height: 0.5em;
`;

class Login extends Component{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailHandler = this.emailHandler.bind(this);

    this.state = {
      input: {},
      valid: true,
      value: "",
    };
  }

  handleChange(event) {
    console.log("changed");
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({input, valid : this.emailHandler(input)});
  }

  handleSubmit(event) {
    // alert('Uma dissertação foi enviada: ' + this.state.value);
    // event.preventDefault();
  }

  emailHandler(input) {
      var isValid = true;

      if ( input && !input["email"]) {
        isValid = false;
      }

      if (input && typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
        }
      }

      return isValid;
    }


   render(){
      return(
         <Flex column alignItemsCenter >
             <Flex.Item alignSelf= 'flex-end' flex='1 0'>
             <STitle>Invision</STitle>
             </Flex.Item>
             <Flex.Item flex='1 0'>
             <SSubtitle>Welcome to Invision</SSubtitle>
             </Flex.Item>
             <Flex column alignItemsStart   style={{width: "18em", }}>
             <SRegular>Name</SRegular>
             <Flex.Item column="true" flex='1 1'>
               <SInput value={this.state.input['email']} valid={this.state.valid} input={this.state.input} onChange={this.handleChange}></SInput>
             </Flex.Item>
             <SRegular>Password</SRegular>
             <Flex.Item flex='1 1'>
             <SPasswordInput></SPasswordInput>
             </Flex.Item>
             <Flex.Item flex= '1 1' alignSelf="flex-end">
              <SRegular>Forgot Password?</SRegular>
             </Flex.Item>
             </Flex>
             <Flex.Item flex='1 0'>
               <SButton>Login</SButton>
             </Flex.Item>
             <Flex.Item flex='1 0'>
              <Flex row>
                  <Flex.Item  flex='1 0'>
                    <Separator/>
                  </Flex.Item>
                  <Flex.Item flex='1 0'>
                    <SRegular>Or</SRegular>
                  </Flex.Item>
                  <Flex.Item flex='1 0'>
                    <Separator/>
                  </Flex.Item>
              </Flex>
             </Flex.Item>
            <Flex.Item flex='1 0'>
              <GmailButton>Entre com o Gmail</GmailButton>
            </Flex.Item>
            <Flex.Item flex='1 0'>
             <Flex row justifyContent = "center">
                 <Flex.Item flex='1 0'>
                   <SRegular>New</SRegular>
                 </Flex.Item>
                 <Flex.Item flex='2 0'>
                   <SRegular>Invision?</SRegular>
                 </Flex.Item>
                 <Flex.Item flex='3 0'>
                   <SRegular>Create Account</SRegular>
                 </Flex.Item>
             </Flex>
            </Flex.Item>
         </Flex>
      );
   }
}

export default Login;
