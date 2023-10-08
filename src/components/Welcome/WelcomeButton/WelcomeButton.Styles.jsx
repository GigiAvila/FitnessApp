import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WelcomeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 30vw;
  }
`

export const StyledLink = styled(Link)`
  width: 80%;
  padding: 0.5rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`
