import styled from 'styled-components'

export const RoutineCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 102vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const RoutineInfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  z-index: 1;
  padding-left: 2vw;
  overflow: hidden;
  overflow-y: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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

  @media (min-width: 768px) {
    width: 95%;
    height: 60vh;
    justify-content: flex-start;
  }

  > p {
    font-size: 2.6vw;
    font-weight: 300;
    line-height: 1.8;
    padding: 1vw;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 0.8vw;
      padding-left: 0vw;
    }
  }
`

export const RoutineTitleContainer = styled.div`
  width: 100%;
  height: auto;

  > h4 {
    font-size: 5vw;

    @media (min-width: 768px) {
      font-size: 1.8vw;
    }
  }
`

export const RoutineChips = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3vw;
  padding: 3vw 0;

  @media (min-width: 768px) {
    padding: 1vw 0;
    gap: 1vw;
  }
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

  @media (min-width: 768px) {
    padding: 1vw;
    gap: 0.5vw;
  }

  > p {
    font-size: 3vw;
    font-weight: 200;

    @media (min-width: 768px) {
      font-size: 0.8vw;
    }
  }
`

export const ButtonActionsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2vw;
  padding: 1vw 0;

  @media (min-width: 768px) {
    gap: 0.5vw;
    flex-direction: row;
  }

  > button {
    width: 40%;
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 2.8vw;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 0.8vw;
      width: 20%;
      height: 5vh;
    }
  }
`
