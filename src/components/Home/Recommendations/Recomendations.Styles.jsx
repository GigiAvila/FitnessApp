

import styled from "styled-components"
import HomePhoto from '../../../../public/homephoto1.png'


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
  background-position: center;
  filter: blur(3px); 
  z-index: 0; 

`;

export const SliderWrapper = styled.div`
  width: 90%;
  height: 45vh;
  margin-bottom: 10vh;
  z-index: 1;
  
`;

export const SliderTitle = styled.h3`
  padding: 2vw;
  font-size: 6vw;
  color: #1d1d1c;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 28vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2vw;
  overflow: hidden;
  overflow-x: auto;
  gap: 5vw;
`;

export const SliderItem = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  height: 90%;
  min-width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; 
  }
`;



export const SliderItemTextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 1vw;
margin-bottom: 1vw;`

export const SliderItemTitle = styled.h3`
font-size: 5vw;
padding-left: 2vw;
`

export const SliderItemInfoContainer = styled.div`
display: flex;
flex-direction: row;
gap: 1vw;
align-items: center;
justify-content: flex-start;`

export const SliderItemTextsContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 4vw;
padding-left: 2vw;`



export const SliderItemText = styled.p`
font-size: 4vw;


`;