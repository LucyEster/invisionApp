import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {colors} from "../assets/colors";
import {STitleLight} from "./SText";

class MajorCarousel extends Component {
    render() {
        return (
            <Carousel swipeable={true} showThumbs={false} infiniteLoop={true} autoPlay={true} showArrows={false}  >
                <div style={{background: colors.secondary,  paddingTop: "5em", paddingBottom: "5em"}}>
                    <img src={process.env.PUBLIC_URL + '/img/component.png'}/>
                    <STitleLight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales </STitleLight>
                </div>
                <div style={{background: colors.secondary, paddingTop: "5em",  paddingBottom: "5em"}}>
                    <img src={process.env.PUBLIC_URL + '/img/component.png'} />
                    <STitleLight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue, nulla a imperdiet suscipit, tortor dui commodo elit. </STitleLight>
                </div>
                <div style={{background: colors.secondary, paddingTop: "5em",  paddingBottom: "5em"}}>
                    <img src={process.env.PUBLIC_URL + '/img/component.png'} />
                    <STitleLight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales </STitleLight>
                </div>
            </Carousel>
        );
    }
}

export default MajorCarousel;
