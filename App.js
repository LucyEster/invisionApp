import React, { Component } from 'react';
import MajorCarousel from './Components/MajorCarousel';
import styled from 'styled-components';
import { css } from 'styled-components';
import SLogin from "./Components/Login";
import Flex from '@react-css/flex';
import { createGlobalStyle } from "styled-components";
import MulishRegular from "./assets/fonts/static/Mulish-Regular.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "MulishRegular";
  src: local("MulishRegular"),
    url("./assets/fonts/static/Mulish-Regular.ttf") format("truetype");
  font-weight: normal;
}
  `;

class App extends Component{
   render(){
      return(
        <div>
        <GlobalStyles />
         <Flex row flex= '1 0'>
            <Flex.Item flex='1 0' style={{margin: "0em"}}>
              <MajorCarousel></MajorCarousel>
            </Flex.Item>
            <Flex.Item flex='1 0'>
              <SLogin></SLogin>
            </Flex.Item>
         </Flex>
         </div>
      );
   }
}



export default App;
