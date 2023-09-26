import styled from "styled-components";



export const RoutineCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

`;


export const RoutineInfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 72vh;
  z-index: 1;
  padding-left: 2vw;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 30px;
  padding: 5vw;

  >p{
    font-size: 2.6vw;
    font-weight: 300;
    line-height: 1.8;
    padding: 1vw;
    width: 90%
    

  }

`;

export const RoutineTitleContainer = styled.div`
width: 100%;
height: auto;

> h4 {
  font-size: 5vw;
}`;

export const RoutineChips = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 3vw;
padding: 3vw 0;

`


export const RountineChip = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2vw;
border-radius: 15px;
height: 3vh;
padding: 3vw;
text-align: center;


> p{
  font-size: 3vw;
  font-weight: 200;
}`


export const ButtonActionsWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.2vw;
padding: 1vw 0;



>button {
  width: 40%;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 2.8vw;
  font-weight: bold;
}`;


