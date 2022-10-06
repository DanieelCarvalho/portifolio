import styled from "styled-components";

export const H1 = styled.h1`
  font-family:  CalibreRegular;
  font-size: clamp(2rem, 3rem, 6rem);
`;

export const Section =styled.section`
  width: 100%;
  height: 800px;
  color: #FEE251;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

` 

export const Titulo = styled.div`
    display: flex;
    height: 200px;
    width: 60%;
    align-items: center;
   
   
`
export const Linha = styled.div`
    border-top: solid #999b9f;
    width: 400px;
    margin-left: 10px;

`



export const SectionB = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100%;
 


 
`
export const Div = styled.div`
  width: 35vw;
  height: 100%;


`
export const P = styled.p`
  color:#fff;
  font-family: CalibreRegular;font-size: clamp(1px, 25px, 26px);
  text-align: justify;
  line-height: 26px;
  width: 31vw;
  height: 100%;
  border: solid red;
  

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
