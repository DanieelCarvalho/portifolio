import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{

  background-color:  #121212 ;
                                          
}
`;

 

export const AboutSection = styled.section`
  min-height: calc(100vh - 45px);
  background-color:  #121212;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 20vh;

  
  
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  height: 550px;
  margin: 0 auto;
  justify-content: space-evenly;
  border: solid red;
  @media screen and (max-width: 500px){
    
  
  } 


`;
export const CaixaTitulo= styled.div`
    display: flex;
    height: 29vh;
    width: 60%;
    align-items: center;
    @media screen and (max-width: 500px){
      width: 90vw;
      height: 10vh;
      
    }

`
export const Title = styled.h1`
     font-family:  CalibreRegular;
     color: #FEE251;
     font-size: clamp(2rem, 3rem, 4rem);
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
  @media screen and (max-width: 500px){
    font-size: clamp(1rem, 2rem, 3rem);
    height: 19vh;
    width:70%;
    justify-content: flex-start;
    margin-left: 10px;
  }
`;
export const Linha = styled.div`
     border-top: solid #999b9f;
    width: 20vw;
    margin-left: 10px;
    @media screen and (max-width: 500px){
      width: 40vw;
      border-top: 0.5px solid #999b9f;
    }

`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  cursor: pointer;
 

`;

export const Link = styled.a`
  width: 380px;
  height: 210px;
  display: flex;
  flex-direction: column;

  &:hover img {
    transform: scale(1.06);
  }


  
`;
export const Div = styled.div`
  background-color: #121212;
 `

export const Figure = styled.figure`
    width: 30vw;
    

  
  @media screen and (max-width: 500px){
    width: 100%;
  }
`


export const ProjectCard = styled.div`
  height: 400px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 
 @media screen and (max-width: 500px){
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
 }
  
`
export const Caixa= styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px){
    display: none;
  }

` 
export const CaixaR = styled.div`
   display: none; 
 @media screen and (max-width: 500px){
    display: block;
    height:  122vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    
 }
`