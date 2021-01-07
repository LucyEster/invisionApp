import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import MajorCarousel from './Components/MajorCarousel';
import styled from 'styled-components';
import { css } from 'styled-components';
import SLogin from "./Components/Login";
import SRegister from "./Components/Register";
import Flex from '@react-css/flex';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {

    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
}

const Home = () => (
      <div>
       <Flex row flex= '1 0'>
          <Flex.Item flex='1 1' style={{margin: "0em"}}>
            <MajorCarousel></MajorCarousel>
          </Flex.Item>
          <Flex.Item flex='1 1'>
            <SLogin></SLogin>
          </Flex.Item>
       </Flex>
       </div>
);

const SignUp = () => (
      <div>
       <Flex row flex= '1 0'>
         <Flex.Item flex='1 1' style={{margin: "0em"}}>
           <MajorCarousel></MajorCarousel>
         </Flex.Item>
          <Flex.Item flex='1 1'>
            <SRegister></SRegister>
          </Flex.Item>
       </Flex>
       </div>
);


export default App;
