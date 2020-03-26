import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { connect } from 'react-redux'


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
                    <Page><h2 style={{ color: 'white' }}> Here are some tips and how to use <span style={{ color: 'blue' }}>Heard</span> for your successful job search. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Stay positive, meditation and exercise help relieve negative emotions.<br></br></h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Use <span style={{ color: 'blue' }}>Heard</span> everyday, keep track of your progress, thoughts and contacts. </h2></Page>
                    <Page><h2 style={{ color: 'white' }}> After a few weeks of entries, you may see patterns or skills that need improvement.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Use those insights to set clear goals and follow through.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Keep track of what positions you have applied to, use that information for following up.</h2><br></br></Page>                   
                    <Page><h2 style={{ color: 'white' }}> Improve your professional skills, continued learning will increase your value.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> It's not what you know it's who you know, fill out your contacts list and use it.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Be selective on who you add, only create contacts that get you closer to your Dream Job.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> Make some coffee, make connections remotely, engage socially. Get seen be <span style={{ color: 'blue' }}>Heard</span>.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> What is your Dream Job? Hmm... </h2><br></br></Page>                   
                    <Page><h2 style={{ color: 'white' }}> Think about it, this guides your goals, who you network with and becomes your compass when it gets rough.</h2></Page>
                    <Page><h2 style={{ color: 'white' }}> We believe organization, positivity and connections, return the best possible results.</h2></Page>
                </Slider>
              
            </Wrapper>     
          );
  }
}

const mapStateToProps = (state) => {
    return { currentJobGoal: state.currentJobGoal };
}
export default connect(mapStateToProps)(CarouselComponentLoggedIn);