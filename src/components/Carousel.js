import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const Wrapper = styled.div`
width: 50%;
height: 30%;
margin-left: 25%;
background: #0080ff;
border: 2.5px solid white;
`

const Page = styled.div`

width: 100%;
height: 180px;
padding: 30px;
padding-bottom: 30px;
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
                    <Page><h2 style={{ color: 'white' }}> It's rough out there.... time to get <span style={{ color: 'blue' }}>Heard</span>.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> We believe organization, positivity and connections, will return the best possible results.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> A job search journal is an essential tool for our busy world. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Heard allows you to keep track of your contacts and daily job search activities.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Heard is free all we ask is that you use it everyday during your job search.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Heard won't get the job for you but it will help you get in the right mindset.</h2></Page>                   
                    <Page><h2 style={{ color: 'white' }}> Get seen get <span style={{ color: 'blue' }}>Heard</span>.</h2></Page>
                </Slider>
              
            </Wrapper>     
          );
  }
}
 
export default CarouselComponent;