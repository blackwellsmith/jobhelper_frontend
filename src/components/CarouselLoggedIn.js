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
height: 140px;
padding: 30px;
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
                    <Page><h2 style={{ color: 'white' }}>So yo want a job as a  <span style={{ color: 'darkblue' }}>{this.props.currentJobGoal.name}</span>.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Keeping organized and on track can be a struggle </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> A job search journal is essential an tool for our busy world </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Heard allows you to keep track of your contacts and daily job search activities</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Heard is free all we ask is that you use it everyday during your job search</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Heard won't get the job for you but it will help you get in the right mindset</h2></Page>                   
                    <Page><h2 style={{ color: 'white' }}> Thank you for your time! Have a great day!</h2></Page>
                </Slider>
              
            </Wrapper>     
          );
  }
}

const mapStateToProps = (state) => {
    return { currentJobGoal: state.currentJobGoal };
}
export default connect(mapStateToProps)(CarouselComponentLoggedIn);