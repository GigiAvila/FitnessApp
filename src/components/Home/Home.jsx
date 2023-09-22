import React from 'react'
import { BackgroundImage, HomeContainer, SliderWrapper, SliderTitle, SliderContainer, SliderItem, SliderItemImg, SliderItemText } from './Home.Styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage />
      <ArrowBackIosIcon style={{
        color: '#ffffff',
        position: 'fixed',
        top: '20px',
        left: '20px',
      }} />
      <SliderWrapper>
        <SliderTitle>Recommended</SliderTitle>
        <SliderContainer>
          <SliderItem>
            <SliderItemImg src="" alt="sliderItemImg" />
            <SliderItemText>Slider item text</SliderItemText>
          </SliderItem>
        </SliderContainer>
      </SliderWrapper>
    </HomeContainer>
  );
}

export default Home;