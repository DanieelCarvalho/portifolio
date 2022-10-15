import styled from 'styled-components'
import {Link} from "react-router-dom"
import SFMono from '../../Fonte/sf-mono-font/SF-Mono-Bold.ttf'

export const Header = styled.header`
 background-color:  #121212;

` 

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: solid #272727 2px;
  @media (max-width:500px){
        display: none;
  }

`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;  
  @media (max-width:500px){
      flex-direction:column;
      height: 40vh;
      justify-content: space-evenly;
      background-color: #121212;
      
      
  }
`

export const Li = styled.li`
   list-style: none;
  
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
export const Modal= styled.div`
display: none;
@media (max-width:500px){
    display:flex;
    flex-direction:column;
    position: absolute;
    left: 78%;
    margin-top: 10px;
    z-index: 2;
  
 
    
  }
  button{
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 100px;
    color: white;
    border: none;
    background-color: #121212;
  }
  li{
   list-style: none;
    
  }
  nav{
  
  }

`
export const Linha= styled.div`
  
  width: 100%;
  height:10vh;
  display: none;
  @media (max-width:500px){
    display: flex;
    border-bottom: solid #272727 2px;
  }
`
export const Foto = styled.img`
    width: 10vh;
    background-color: #121212;
`
export const Foto1 = styled.img`
 width: 10vh; 
  background-color: #121212;
 

   
`
export const Botao = styled.button`
    transform: 1s;
    border: solid red;
    &:active{
   
   transform: scale(-1.5)
 }

 



`
