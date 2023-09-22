import styled from "styled-components";

export const HistoryCardContainer = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 1vw;
overflow: hidden;
overflow-y: auto;
`

export const HistoryTitle = styled.h2``





export const PrevRoutineContainer = styled.div`
width: 95%;
heigth: 20vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
border-radius: 4px;
position: relative;

  `

export const PrevRoutineImageContainer = styled.div`
width:35%;
height:auto;
display: flex;
;`


export const PrevRoutineImage = styled.img`
width: 100%;
height: auto;`


export const PrevRoutineTextContainer = styled.div`
width: 65%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding:  2vw ;

> h5{
  font-size: 3vw;
  font-weight: 200;
  padding: 1vw 0;
 }
`

export const PrevRoutineTitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5vw;


 > h3 {
  font-size: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw 0;


 }

 > h4{
  font-size: 4vw;
  font-weight: 300;
  padding: 1vw 0;

 }


  ` 