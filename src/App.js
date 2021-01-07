import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import MajorCarousel from './Components/MajorCarousel';
import styled from 'styled-components';
import { css } from 'styled-components';
import SLogin from "./Components/Login";
import Flex from '@react-css/flex';
import { createGlobalStyle } from "styled-components";

function App() {

    return(
      <div>
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

export default App;
