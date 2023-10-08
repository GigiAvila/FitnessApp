import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Title = styled.h2`
  font-size: 8vw;
  padding: 1vw;
  z-index: 1;
  color: #cde186;

  @media (min-width: 768px) {
    font-size: 3vw;
  }
`
