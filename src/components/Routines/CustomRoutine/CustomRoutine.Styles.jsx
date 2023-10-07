import styled from 'styled-components'

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
    width: 100%;
    min-height: 40vh;
  }

  &:hover {
    background-size: 120%;
    transition: all 0.5s ease;
  }

  > h5 {
    font-size: 4vw;
    margin: 1vw;

    @media (min-width: 768px) {
      font-size: 1.2vw;
      margin: 0.5vw;
    }
  }
`
