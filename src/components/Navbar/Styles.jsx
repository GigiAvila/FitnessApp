import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
`

export const Nav = styled.nav`
  width: 90%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  position: absolute;
  bottom: 10px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    font-size: 6vw;
  }
`
