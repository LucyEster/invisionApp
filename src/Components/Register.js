import React, { Component } from 'react';
import styled from 'styled-components';
import SButton from "./Components/SButton";
import Flex from '@react-css/flex';

class Register extends Component{
   render(){
      return(
         <Flex flexDirection='column' >
         <Flex.Item flex='1'>
           <SButton>Login</SButton>
         </Flex.Item>
            <Flex.Item flex='1' >
              <SButton>Login</SButton>
            </Flex.Item>
         </Flex>
      );
   }
}

export default Register;
