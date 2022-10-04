import styled from 'styled-components'
import {Link} from "react-router-dom"

export const Header = styled.header`
`

export const Nav = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: solid #272727 2px;
`

export const Ul = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;
`

export const Li = styled.header`
  
`

export const LinkS = styled(Link)`
font-family: 'SF Mono', sans-serif;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;

  &:hover {
    color:  #FEE251;
  }
`
