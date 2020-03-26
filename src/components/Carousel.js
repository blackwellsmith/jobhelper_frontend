import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const Wrapper = styled.div`
width: 70%;
height: 35%;
margin-left: 15%;
background: #0080ff;
border: 2.5px solid white;
`

const Page = styled.div`

width: 100%;
height: 180px;
padding: 30px;
padding-bottom: 30px;
display: flex;
align-items: center;
justify-content: center;
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
                <Page ><h2 style={{ color: 'white' }}> It's rough out there... time to get <span style={{ color: 'blue' }}>Heard</span>.</h2></Page>
                <Page ><h2 style={{ color: 'white' }}> As our world turns to remote work new tools are needed.</h2></Page>
                <Page ><h2 style={{ color: 'white' }}> We believe organization, positivity and connections, return the best possible results.</h2><br></br></Page>
                <Page ><h2 style={{ color: 'white' }}> A job search journal is an essential tool for our evolving world. </h2></Page>
                <Page ><h2 style={{ color: 'white' }}> <span style={{ color: 'blue' }}>Heard</span> helps you keep track of pertinent contacts and set goals.         </h2><br></br></Page>
                <Page ><h2 style={{ color: 'white' }}> <span style={{ color: 'blue' }}>Heard</span> is free, all we ask is that you use it everyday during your job search.</h2></Page>
                <Page ><h2 style={{ color: 'white' }}> <span style={{ color: 'blue' }}>Heard</span> won't get the job for you but it will help you get in the right mindset.</h2></Page>                   
                <Page ><h2 style={{ color: 'white' }}> Sign up today! Get seen get <span style={{ color: 'blue' }}>Heard</span>.</h2></Page>
              </Slider>
              
            </Wrapper>     
          );
  }
}
 
export default CarouselComponent;