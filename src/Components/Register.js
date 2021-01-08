import React, { Component } from 'react';
import styled from 'styled-components';
import {SButton, GmailButton} from "./SButton";
import {STextInput, SInput, SPasswordInput} from "./SInputText";
import {STitle, SSubtitle, SRegular, SError} from "./SText";
import {colors} from "../assets/colors";
import Flex from '@react-css/flex';
import { GoogleLogin } from 'react-google-login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const responseGoogle = (response) => {
  console.log(response);
}

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

class Register extends Component{

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailHandler = this.emailHandler.bind(this);

    this.state = {
      input: {text: {value : undefined}, email: {value : undefined }, password: {value : undefined }},
      valid: true,
      value: "",
    };
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name]['value'] =  event.target.value;
    input[event.target.name]['valid'] = this.emailHandler(input);

    this.setState({input});
  }

  handleSubmit(event) {
    // alert('Uma dissertação foi enviada: ' + this.state.value);
    // event.preventDefault();
  }

  emailHandler(input) {
      var isValid = true;

      if (input && input["email"] && typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"]['value'])) {
          isValid = false;
        }
      }

      if (input && typeof input["password"] !== "undefined" && input["password"]['value'] == "") {
          isValid = false;
      }

      if (input && typeof input["text"] !== "undefined" && input["text"]['value'] == "") {
          isValid = false;
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
            <SRegular>Full Name</SRegular>
            <Flex.Item column="true" flex='1 1'>
              <STextInput value={this.state.input['text']['value']} valid={this.state.input['text']['valid']} input={this.state.input} onChange={this.handleChange}></STextInput>
            </Flex.Item>
            {
              !this.state.input['text']['valid'] ? <Flex.Item flex= '1 1' alignSelf="flex-end">
             <SError>The email field is incorrect.</SError>
            </Flex.Item> : null
            }
            <SRegular>Email</SRegular>
            <Flex.Item column="true" flex='1 1'>
              <SInput value={this.state.input['email']['value']} valid={this.state.input['email']['valid']} input={this.state.input} onChange={this.handleChange}></SInput>
            </Flex.Item>
            {
              !this.state.input['email']['valid'] ? <Flex.Item flex= '1 1' alignSelf="flex-end">
             <SError>The email field is incorrect.</SError>
            </Flex.Item> : null
            }
            <SRegular>Password</SRegular>
            <Flex.Item flex='1 1'>
            <SPasswordInput value={this.state.input['password']['value']} valid={this.state.input['password']['valid']} input={this.state.input} onChange={this.handleChange}></SPasswordInput>
            </Flex.Item>
            {
              !this.state.input['password']['valid'] ? <Flex.Item flex= '1 1' alignSelf="flex-end">
             <SError>This field Cannot be empty.</SError>
            </Flex.Item> : null
            }
           <Flex.Item flex= '1 1' alignSelf="flex-end">
            <SRegular>Forgot Password?</SRegular>
           </Flex.Item>
            </Flex>
            <Flex.Item flex='1 0'>
              <SButton enabled={this.state.input['email']['valid'] && this.state.input['password']['valid']}>Sign Up</SButton>
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
           <GoogleLogin
               clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
               render={renderProps => (
                 <GmailButton icon={'GOOGLE_ICON'} onClick={renderProps.onClick} style={{margin: "2em"}}><SRegular>Sign In with Google</SRegular></GmailButton>
               )}
               buttonText="Sign in with Google"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
               cookiePolicy={'single_host_origin'}
               />
           </Flex.Item>
           <Flex.Item flex='1 0'>
            <Flex row justifyContent = "center">
                <Flex.Item flex='1 0'>
                  <SRegular>Already on</SRegular>
                </Flex.Item>
                <Flex.Item flex='2 0'>
                  <SRegular>Invision?</SRegular>
                </Flex.Item>
                <Flex.Item flex='3 0'>
                <Link to="/"><SRegular>Sign in</SRegular></Link>
                </Flex.Item>
            </Flex>
           </Flex.Item>
        </Flex>
     );
   }
}

export default Register;
