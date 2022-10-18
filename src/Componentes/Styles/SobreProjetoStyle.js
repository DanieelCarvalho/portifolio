import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{

  background-color:  #121212 ;
                                          
}
`;


export const SobreProjeto = styled.div`
     color:#fff;
    font-family: CalibreRegular;
    max-width: 375px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p{
        text-align: justify;
      
    }
    h3{
        color: #999b9f; 
        letter-spacing: 1px;
    }
    @media screen and (max-width: 500px){
    }
`
export const Div= styled.div`
    display: flex;
    justify-content: space-between;
    width: 30vw;
    @media screen and (max-width: 500px){
        width: 100%;
       
    }
 
    
    h3{
        width: 200px;
    }
    a{
        width: 70px;
    }
 
    ul{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        @media screen and (max-width: 500px){
        width: 100%;
       
    }
        }
    li{
        list-style: none;
        color: #999b9f;   
        font-size: 0.8rem;
    }
`

