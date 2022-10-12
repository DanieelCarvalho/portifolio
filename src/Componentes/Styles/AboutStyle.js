import styled from "styled-components";

export const H1 = styled.h1`
  font-family:  CalibreRegular;
  font-size: clamp(2rem, 3rem, 4rem);
  width: 250px;
  @media screen and (max-width: 500px){
    font-size: clamp(1rem, 2rem, 3rem);
  }
`;

export const Section =styled.section`
  width: 100%;
  height: 650px;
  color: #FEE251;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:  #121212;


` 

export const Titulo = styled.div`
    display: flex;
    height: 200px;
    width: 60%;
    align-items: center;
 
   
`
export const Linha = styled.div`
    border-top: solid #999b9f;
    width: 20vw;
    margin-left: 10px;
    @media screen and (max-width: 500px){
      width: 40vw;
      border-top: 0.5px solid #999b9f;
    }

`



export const SectionTwo = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90vw;
  height: 100%;
  @media screen and (max-width: 500px){
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;
  height: 850px;
  

  }
 


 
`
export const Div = styled.div`
  width: 35vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px){
    width: 100%;
    align-items: center;
    justify-content: center;
   
  }
`
export const DivTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;


`
export const P = styled.p`
  color:#fff;
  font-family: "CalibreRegular";
  font-size: clamp(1px, 15px, 17px);
  text-align: justify;
  line-height: 26px;
  width: 31vw;
  height: 100%;
  @media screen and (max-width: 500px){
    width: 100%;
    display: flex;
    align-items: center;
  }



`

export const Foto = styled.img`
  width: 22vw;
  height: 48vh;
  border-radius: 10px;
  z-index: 1;
  filter: brightness(.4);
  transition: 2s;
  :hover{
    filter: none;
  }
  @media screen and (max-width: 500px){
    width: 90%;
    height: 52vh;
  }


`
export const BarraFoto= styled.div`
  border-bottom:  solid #FEE251 1px ;
  border-top: solid #FEE251 1px;
  border-left: solid #FEE251 1px;
  border-right:1px solid #FEE251 ;
  width: 22vw;
  height: 48vh;
  color: red;
  border-radius: 3px;
  position: absolute;
  left: 10%;
  bottom: -10%;
  transition-duration: 1s;
  @media screen and (max-width: 500px){
    width: 90%;
    height: 52vh;
  }

`
export const Figure = styled.figure`
  position: relative;
  display: flex;
  &:hover {
    
  ${BarraFoto}{
    left: 5%;
     bottom: -5%;
   
  }
  
 
  }


`


export const Button = styled.button`
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
