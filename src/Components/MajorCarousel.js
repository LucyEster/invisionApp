import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {colors} from "../assets/colors";
import {strings} from "../assets/strings-en";
import {dimensions} from "../assets/dimensions";
import {STitleLight} from "./SText";

class MajorCarousel extends Component {
    render() {
        return (
            <Carousel swipeable={true} showThumbs={false} infiniteLoop={true} autoPlay={true} showArrows={false}>
                <div style={{background: colors.secondary, paddingBottom: dimensions.carouselPaddingBottom}}>
                    <img src={process.env.PUBLIC_URL + '/img/component.png'}/>
                    <STitleLight>{strings.txtLorem}</STitleLight>
                </div>
                <div style={{background: colors.secondary,   paddingBottom: dimensions.carouselPaddingBottom}}>
                    <img src={process.env.PUBLIC_URL + '/img/component.png'} />
                    <STitleLight>{strings.txtLorem}</STitleLight>
                </div>
                <div style={{background: colors.secondary,  paddingBottom: dimensions.carouselPaddingBottom}}>
                    <img src={process.env.PUBLIC_URL + '/img/component.png'} />
                    <STitleLight>{strings.txtLorem}</STitleLight>
                </div>
            </Carousel>
        );
    }
}

export default MajorCarousel;
