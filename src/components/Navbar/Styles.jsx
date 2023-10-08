import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5px;
`

export const Nav = styled.nav`
  width: 90%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 50vw;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 1vw;

  svg {
    font-size: 6vw;

    @media (min-width: 768px) {
      font-size: 2vw;
    }
  }
`
