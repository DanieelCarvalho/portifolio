import styled, { createGlobalStyle } from "styled-components";
import { FiLinkedin, FiGithub } from 'react-icons/fi';


export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  background-color:  #121212 ;
 
                                              
}
`;


export const Section = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color:  #121212;
 
`

export const H4 = styled.h4`
     color:#fff;
    font-family: CalibreRegular;
    text-transform: uppercase;
    font-size: clamp(1rem, 2rem, 5rem);
`

export const H1 = styled.h1`
    color:#FEE251;
    font-family: CalibreRegular;
    text-transform: uppercase;
    font-size: clamp(2rem, 3rem, 6rem);
`

export const H2 = styled.h2`
    color:#fff;
    font-family: CalibreRegular;
    text-transform: uppercase;
    font-size: clamp(1rem, 2rem, 5rem);
`
export const SectionTwo = styled.section`
    width: 40%;
    display: flex;
    justify-content: space-evenly;@media screen and (max-width: 500px){
      
      width: 100%;
    }

`
export const Linkedin = styled(FiLinkedin)`
font-size: clamp(1rem, 1.5rem, 2rem);
    color: #999b9f;
    text-transform: uppercase;
    font-family: CalibreRegular;
    transition: 0.1s;

`
export const Github = styled(FiGithub)`
 font-size: clamp(1rem, 1.5rem, 2rem);
    color: #999b9f;
    text-transform: uppercase;
    font-family: CalibreRegular;
    transition: 1s;
 
`
export const Link = styled.a`
   text-decoration: none;
    width: 12vw;
    height: 50px;
    display: flex;
    font-size: 0.9rem;
    font-family: "SF-Mono-Bold";
    align-items: center;
    justify-content: space-evenly;
    border: #999b9f solid 2px ;
    border-radius: 10px;
    background-color: #121212;
    color: #999b9f;
    cursor: pointer;
    transition: all .5s;
    &:hover{
      border-color:#FEE251 ;
      transform: scale(1.1);
      color:#FEE251;
      ${Github}{
        transform: rotate(360deg);
      }
      ${Linkedin}{
     
        transform: scale(1.1);
      }
  
    }
    @media screen and (max-width: 500px){
      width: 150px;
      color: #FEE251;
    }
`

