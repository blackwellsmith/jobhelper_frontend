import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { connect } from 'react-redux'


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
padding-bottom: 60px;
display: flex;
align-items: center;
justify-content: center;
`



class CarouselComponentLoggedIn extends React.Component {
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
                    <Page><h2 style={{ color: 'white' }}> Here are some suggestions for your successful job search. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Keep a positive attitude. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Use Heard everyday, keep track of your activities and contacts. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> It's not what you know it's who you know, fill out your contacts list and use it.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Make someone coffee, make connections remotely, engage socially. Get seen be <span style={{ color: 'blue' }}>Heard</span>.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Keep track of what positions you have applied to, use that information for following up.</h2><br></br></Page>                   
                    <Page><h2 style={{ color: 'white' }}> Improve your professional skills, continued learning will make you a better candidate.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> We believe organization, positivity and connections, will return the best possible results.</h2></Page>
                </Slider>
              
            </Wrapper>     
          );
  }
}

const mapStateToProps = (state) => {
    return { currentJobGoal: state.currentJobGoal };
}
export default connect(mapStateToProps)(CarouselComponentLoggedIn);