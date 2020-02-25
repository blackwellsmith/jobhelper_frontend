import React from 'react';
import CarouselComponent from './Carousel.js'
import CarouselComponentLoggedIn from './CarouselLoggedIn.js'
import styled from 'styled-components';
import { connect } from 'react-redux'

const SliderWrapper = styled.div`
  
  justify-content:center;
  `

class Home extends React.Component {
    render() {
      return (
        <SliderWrapper>
              <div className='home'>
                 
                 <br></br>
                 <div>
              {this.props.currentUser ? <CarouselComponentLoggedIn /> : <CarouselComponent />}
                 </div>
              </div>
        </SliderWrapper>
          )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}
 
export default connect(mapStateToProps) (Home);