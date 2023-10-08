import styled, { keyframes } from 'styled-components'

export const RoutineCustomOptionContainer = styled.div`
  width: 90%;
  min-height: 27vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    min-height: 40vh;
  }

  > h5 {
    font-size: 4vw;
    margin: 1vw;
    position: absolute;

    @media (min-width: 768px) {
      font-size: 1.2vw;
      margin: 0.5vw;
    }
  }
`

const kenburnsTop = keyframes`
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
    transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
    transform-origin: top;
  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    -webkit-animation: ${kenburnsTop} 5s ease-out both;
    animation: ${kenburnsTop} 5s ease-out both;
  }
`
