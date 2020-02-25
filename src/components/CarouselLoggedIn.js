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
padding-bottom: 30px;
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
                    <Page><h2 style={{ color: 'white' }}> Here is a list of habits for your successful job search. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Keep a positive attitude. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Use Heard everyday, keeping track of what you do can keep you on headed down the correct path. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> It's not what you know it's who you know, fill out your contacts list and use it.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Buy someone coffee 3 times a week, get out talk to people you never know what can happen. Get seen be <span style={{ color: 'blue' }}>Heard</span>.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Keep track of what positions you have applied in your journal, use that information for follow up calls.</h2></Page>                   
                    <Page><h2 style={{ color: 'white' }}> Always work to improve your professional skills. What your reading or doing is a great way to show your willing to learn.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> We believe staying organized and being positive during your job search will return the best possible results.</h2></Page>
                </Slider>
              
            </Wrapper>     
          );
  }
}

const mapStateToProps = (state) => {
    return { currentJobGoal: state.currentJobGoal };
}
export default connect(mapStateToProps)(CarouselComponentLoggedIn);