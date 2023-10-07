import styled from 'styled-components'

export const RoutinesWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const RoutinesTitles = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    font-size: 7vw;
    margin: 0;
    padding: 1vw;

    @media (min-width: 768px) {
      font-size: 2vw;
    }
  }
`

export const RoutinesOptionsWrapper = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2vw;
  padding: 2vw;
  overflow-y: auto;
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 100%;
    min-height: 40vh;
  }

  &:hover {
    background-size: 110%;
    transition: all 0.5s ease;
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
  position: relative;

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
