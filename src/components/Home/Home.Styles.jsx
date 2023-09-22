import styled from "styled-components"
import HomePhoto from '../../../public/WelcomePhoto1.jpg'


export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative; 
`;


export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${HomePhoto});
  background-size: cover;
  filter: blur(5px); 
  z-index: -1;
`;

export const SliderWrapper = styled.div`
  width: 90%;
  height: 35vh;
  margin-bottom: 10vh;
`;

export const SliderTitle = styled.h3`
  padding: 2vw;
  font-size: 6vw;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: row; /* Cambiado */
  justify-content: flex-start;
  align-items: center;
  padding-left: 2vw;
`;

export const SliderItem = styled.div`
  background-color: blue;
  border-radius: 15px;
  height: 90%;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start; /* Cambiado */
`;

export const SliderItemImg = styled.img``;

export const SliderItemText = styled.p`
  padding: 3vw;
  font-size: 4vw;
`;