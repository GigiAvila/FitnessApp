import styled, { keyframes } from 'styled-components'

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

export const RoutineOptionContainer = styled.div`
  width: 90%;
  min-height: 27vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    -webkit-animation: ${kenburnsTop} 5s ease-out both;
    animation: ${kenburnsTop} 5s ease-out both;
  }
`

export const RoutineOptionTitles = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1vw;
  padding: 1.2vw;
  position: absolute;

  @media (min-width: 768px) {
    padding: 0.5vw;
  }

  > h5 {
    font-size: 4vw;
    margin: 0;
    padding: 0.5vw;

    @media (min-width: 768px) {
      font-size: 1.2vw;
      padding: 0.3vw;
    }
  }

  > p {
    font-size: 3vw;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1vw;
    }
  }
`

export const Level = styled.span`
  font-size: 3.2vw;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.2vw;
  }
`
