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

  &::-webkit-scrollbar {
    width: 0.1em;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: none;
  }
`
