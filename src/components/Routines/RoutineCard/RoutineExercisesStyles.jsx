import styled from 'styled-components'

export const ExerciseWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const ExercisesTitle = styled.h2`
  font-size: 4vw;
  padding: 2vw 0;

  @media (min-width: 768px) {
    font-size: 1.6vw;
    padding: 0.5vw;
  }
`

export const ExercisesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  overflow: hidden;
  overflow-y: auto;
  padding-right: 5vw;
`

export const ExerciseContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  object-fit: contain;

  > video {
    width: 50%;
    height: auto;
    border-radius: 0 15px 15px 0;

    @media (min-width: 768px) {
      width: 60%;
    }
  }
`

export const ExerciseTextContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1vw;
  padding: 2vw;
`

export const DataContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2vw;
`

export const ExerciseTitle = styled.div`
  font-size: 3vw;
  font-weight: bold;
  line-height: 1.8;

  @media (min-width: 768px) {
    font-size: 1.5vw;
  }
`

export const ExerciseText = styled.div`
  font-size: 3vw;

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`
