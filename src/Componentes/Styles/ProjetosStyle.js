import styled from "styled-components";


export const AboutSection = styled.section`
  min-height: calc(100vh - 45px);
  background-color:  #121212;
  
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  justify-content: space-evenly;
  @media screen and (max-width: 500px){
    border: solid red;
  }



`;
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
  }
`;

export const Img = styled.img`
  width: 25vw;
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
    transform: scale(1.2);
  }

  span {
    position: relative;
    z-index: 1;
    margin-top: -10px;
    padding: 10px;
    text-decoration: none;
    text-align: center;
    color: #fff;
    background-color: #303841;

    ::before {
      content: "< ";
      opacity: 0;
      transition: 0.3s;
    }

    ::after {
      content: " />";
      opacity: 0;
      transition: 0.5s;
    }
  }

  :hover span::before,
  :hover span::after {
    color: #ff7f50;
    opacity: 1;
  }
`;
export const Div = styled.div`
  background-color: #121212;
 `

export const Figure = styled.figure`
    max-width: 400px;
   
  @media screen and (max-width: 500px){
    
    
    


  }
`


export const ProjectCard = styled.div`

 @media screen and (max-width: 500px){
  border: solid red;
 }
  
`