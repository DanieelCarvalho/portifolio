import styled from 'styled-components'
import {Link} from "react-router-dom"
import SFMono from '../../Fonte/sf-mono-font/SF-Mono-Bold.ttf'

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
 @font-face {
        font-family: "SF-Mono-Bold";
        src: url(${SFMono});
    }
  font-family: "SF-Mono-Bold";
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: clamp(0.5rem, 1rem, 2rem);
    transition: 0.2s;
    transition-timing-function: ease-in-out;
  &:hover {
    color:  #FEE251;
  }
`
