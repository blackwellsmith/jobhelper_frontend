import React from 'react';
import CarouselComponent from './Carousel.js'
import styled from 'styled-components';

const SliderWrapper = styled.div`
  
  justify-content:center;
  `

class Home extends React.Component {
    render() {
      return (
        <SliderWrapper>
              <div className='home'>
                 <h1 className="homie" style={{ color: 'blue' }} >It's rough out there get Heard</h1>
                 <br></br>
                 <div>
                 <CarouselComponent />
                 </div>
              </div>
        </SliderWrapper>
          )
  }
}
 
export default Home;