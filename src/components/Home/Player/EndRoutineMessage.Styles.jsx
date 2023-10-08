import styled from 'styled-components'

export const EndRoutineContainer = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1.2rem;
`

export const Title = styled.h2`
  font-size: 6vw;
  margin-bottom: 10px;
  color: #1d1d1c;

  @media (min-width: 768px) {
    font-size: 2vw;
  }
`

export const Subtitle = styled.h3`
  font-size: 5vw;
  padding-bottom: 2vw;
  color: #1d1d1c;

  @media (min-width: 768px) {
    font-size: 1.8vw;
  }
`

export const Message = styled.p`
  font-size: 4vw;
  color: #7c7c7e;

  @media (min-width: 768px) {
    font-size: 1.3vw;
  }
`
