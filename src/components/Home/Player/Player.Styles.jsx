import styled from 'styled-components'

export const VideoPopover = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;
  flex-direction: column;}
  justify-content: center;
  gap: 3vw;

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  gap: 3vw;

  @media (min-width: 768px) {
    gap: 1vw;
  }

  > h2 {
    font-size: 6vw;

    @media (min-width: 768px) {
      font-size: 2vw;
    }
  }

  > h5 {
    font-size: 5vw;

    @media (min-width: 768px) {
      font-size: 1.2vw;
    }
  }
`

export const Tooltip = styled.span`
  position: fixed;
  top: 40px;
  left: 50px;
  padding: 0.5vw;
  border-radius: 4px;
  z-index: 1;
  font-weight: bold;
`
