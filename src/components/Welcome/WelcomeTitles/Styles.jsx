import styled from 'styled-components'

export const WelcomeTitleContainer = styled.div`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const WelcomeTitle = styled.h3`
  font-size: 10vw;
  padding: 3vw;

  @media (min-width: 768px) {
    font-size: 4vw;
  }
`

export const WelcomeSubtitle = styled.h5`
  font-size: 6vw;
  font-weight: 300;
  padding: 3vw;

  @media (min-width: 768px) {
    font-size: 2vw;
  }
`
