import styled from 'styled-components'
import { Link } from "react-router-dom"
import SFMono from '../../Fonte/sf-mono-font/SF-Mono-Bold.ttf'

export const Header = styled.header`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom: solid #272727 1px;
 border-color:  ${({ theme }) => theme.text};
 button{
  display:none;
 }
 @media (max-width:500px){
  button{
  display:initial;
    position: absolute;
    left: 37%;
 }
  height:12vh;
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  }

`

export const Nav = styled.nav`
  width: 50%;
  height: 80px;
  display: flex;
  justify-content: center;
  button{
    display: initial;
  }
  @media (max-width:500px){
    display: none;
     button{
    display: none;
  }
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
  color: #fff ;
  color: ${({ theme }) => theme.LinkHeader  };
  font-weight: 600;
  font-size: clamp(0.5rem, 1rem, 2rem);
    transition: 0.2s;
    transition-timing-function: ease-in-out;
  &:hover {
    color:  #FEE251;
  }
`
export const Modal = styled.div`
display: none;
@media (max-width:500px){
    display:flex;
    flex-direction:column;
    position: absolute;
    left: 86%;
    margin-top: 10px;
    z-index: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.teste};

  }
  button{
    display:flex;
    flex-direction:column;
    align-items: center;
    color: white;
    border: none;
    background-color: #121212;
    background-color: ${({ theme }) => theme.teste};
   
    
  }
  ul{
    background-color: ${({ theme }) => theme.teste};
    width: 20vw;
    height: 29vh;
    position: absolute;
    right: 9%;
  
  }
  li{
   list-style: none;
    
  }
  nav{

  }

`

export const Foto = styled.img`
    width: 7vh;
    background-color: #121212;
    background-color: ${({ theme }) => theme.teste};
`
export const Foto1 = styled.img`
 width: 7vh; 
  background-color: #121212;
  background-color: ${({ theme }) => theme.teste};
 

   
`
export const Botao = styled.button`
    transform: 1s;
    border: solid red;
    
    &:active{
   
   transform: scale(-1.5)
 }
`
export const CaixaLogo =styled.div`
  background-color: #999b9f; 
  background-color:   ${({ theme }) => theme.logo};
  clip-path: polygon(48% 100%, 100% 51%, 97% 0, 0 0, 0 51%);
  position: relative;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  left :3% ;
  bottom: 9%;
  @media (max-width:500px){
    width: 60px;
    height: 60px;
  }


`
export const Logo = styled.div`
clip-path: polygon(48% 100%, 100% 51%, 97% 0, 0 0, 0 51%);
position: absolute;
  top: 2px; 
  left: 2.5px; 
  width: 40px; 
  height: 40px; 
 text-align: center;
 transition: .1s;
 color: #FEE251;
 background-color: #121212 ;
 background-color:   ${({ theme }) => theme.teste};
 transition: .5s;
 @media (max-width:500px){
  width: 55px; 
  height: 55px;
  }

 :hover{
  background-color: #121212;
  opacity: 0.7;
 }

`
export const LinkLogo =styled(Link)`
  color: #FEE251;
  text-decoration: none;
  text-align: center;
  font-size: clamp(0.5rem, 1.3rem, 2rem);
  text-transform: uppercase;
  display: flex;
  align-items:center;
  justify-content: center;
  height: 4vh;
  transition: .5;
  :hover{
    transform: scale(1.1);
  }
  @media (max-width:500px){
    height: 5vh;
  }
  @media screen and (max-height: 500px){
    height: 7vh;
    }
   

`
