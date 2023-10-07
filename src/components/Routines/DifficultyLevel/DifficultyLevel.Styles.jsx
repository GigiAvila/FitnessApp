import styled from 'styled-components'

export const LevelContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const LevelOption = styled.div`
  width: 100%;
  height: auto;
  padding: 1vw;
  text-align: center;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 1vh;
  }
`
