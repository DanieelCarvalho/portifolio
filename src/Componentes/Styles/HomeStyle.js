import styled from "styled-components";


export const Section = styled.section`
    width: 90%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

` 

export const H4= styled.h4`
     color:#fff;
    font-family: CalibreRegular;
    text-transform: uppercase;
    font-size: clamp(1rem, 2rem, 5rem);
`

export const H1= styled.h1`
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
export const SectionTwo =styled.section`
    width: 40%;
    display: flex;
    justify-content: space-evenly;@media screen and (max-width: 500px){
      
      width: 100%;
    }
`
export const Button =styled.button`
    width: 200px;
    height: 50px;
    display: flex;
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
      background-color: ;
      border-color:#FEE251 ;
      transform: scale(1.1)
    }
    @media screen and (max-width: 500px){
      width: 150px;
    }
 
    
    
`
export const Link = styled.a`
  text-decoration: none;
  color:#999b9f;
  &:hover{
    p{
        color: #FEE251;
      }
  }
 

`
