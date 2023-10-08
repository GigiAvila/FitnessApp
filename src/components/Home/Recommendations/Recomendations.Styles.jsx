import styled from 'styled-components'
import HomePhoto from '../../../../public/homephoto1.png'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${HomePhoto});
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  z-index: 0;

  @media (min-width: 768px) {
    width: 60%;
    left: 20%;
  }
`

export const SliderWrapper = styled.div`
  width: 90%;
  height: 40vh;
  z-index: 1;
  margin-bottom: 10vh;

  @media (min-width: 768px) {
    height: 60vh;
    width: 50%;
  }
`

export const SliderTitle = styled.h3`
  padding: 2vw;
  font-size: 6vw;
  color: #1d1d1c;

  @media (min-width: 768px) {
    font-size: 2vw;
  }
`

export const SliderContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2vw;
  gap: 5vw;
  overflow: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0.5vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
    border: 1px solid black;
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    height: 42vh;
  }
`

export const SliderItem = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  height: 26vh;
  min-width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  margin-top: 2vw;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media (min-width: 768px) {
    min-width: 25vw;
    height: 37vh;
  }
`

export const SliderItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1vw;
  margin-bottom: 1vw;
  width: 70%;

  @media (min-width: 768px) {
    gap: 0.3vw;
    margin-bottom: 2vw;
  }
`

export const SliderItemTitle = styled.h3`
  font-size: 5vw;
  padding-left: 2vw;

  @media (min-width: 768px) {
    font-size: 1.3vw;
  }
`

export const SliderItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
  align-items: center;
  justify-content: flex-start;
`

export const SliderItemTextsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4vw;
  padding-left: 2vw;

  @media (min-width: 768px) {
    padding-left: 0.3vw;
  }
`

export const SliderItemText = styled.p`
  font-size: 4vw;

  @media (min-width: 768px) {
    font-size: 1.2vw;
  }
`
