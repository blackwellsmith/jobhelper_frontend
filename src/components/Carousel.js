import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const Wrapper = styled.div`
width: 50%;
height: 30%;
margin-left: 25%;
background: blue;


`

const Page = styled.div`
width: 100%;
height: 150px;
`



class CarouselComponent extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <Wrapper>
                <Slider {...settings}>
                    <Page>page one</Page>
                    <Page>page two</Page>
                    <Page>page three</Page>
                </Slider>
              
            </Wrapper>     
          );
  }
}
 
export default CarouselComponent;