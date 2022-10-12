import React from "react";
import styled from "styled-components";
import * as S from "../../Styles/ProjetosStyle";
import Carousel from 'nuka-carousel';
import { easeCircleOut, easeElasticOut } from 'd3-ease';
import Beat from "../../Assets/Beat.jpg";
import Calc from "../../Assets/calc.jpg";
import Harry from "../../Assets/harry.jpg";
import Lista from "../../Assets/Listadecomprar.jpg";
import Movie from "../../Assets/Movietop+.jpg";
import Pokedex from "../../Assets/pokedex.jpg";
import Star from "../../Assets/Projetostarwars.jpg";
import Witcher from "../../Assets/thewitcher.jpg";
import Rc from "../../Assets/Rc.jpg"
import { display, height } from "@mui/system";

const Parousel= styled(Carousel)`
  
   @media screen and (max-width: 500px){
    width: 100%;
  
    
  }

`;

export default function Projetos({
  
  title,
  beat,
  calc,
  harry,
  lista,
  movie,
  pokedex,
  star,
  rc,
  witcher
  
  

}) {
  return (
  
   
      <S.Container>
        
        <S.Title>{title}</S.Title>
      <Parousel wrapAround={true} slidesToShow={3} style={{}}  defaultControlsConfig={{
 prevButtonStyle:{
  color: '#FEE251',
  fontFamily: " SF-Mono-Bold"
  
 },
 nextButtonStyle: {
  fontFamily: " SF-Mono-Bold",
  color: '#FEE251',
 }, 
  pagingDotsStyle: {
    fill: '#FEE251',
    nextButton: 'red',
  
  }
}}>
        <S.ProjectCard>
          <S.Link href={beat} target="_blanck" title="Beat">
            <S.Figure>
              <S.Img src={Beat} alt="foto do projeto"/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>
       

        <S.ProjectCard>
          <S.Link  href={calc} target="_blanck" title="Calculadora">
            <S.Figure>
              <S.Img src={Calc} alt="foto do projeto"/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>
       
        
        <S.ProjectCard>
          <S.Link href={harry} target="_blanck">
            <S.Figure>
              <S.Img src={Harry}/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={lista} target="_blanck">
            <S.Figure>
              <S.Img src={Lista}/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={movie} target="_blanck">
            <S.Figure>
              <S.Img src={Movie}/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={pokedex} target="_blanck">
            <S.Figure>
              <S.Img src={Pokedex}/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={star} target="_blanck">
            <S.Figure>
              <S.Img src={Star}/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={witcher} target="_blanck">
            <S.Figure>
              <S.Img src={Witcher}/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={rc} target="_blanck">
            <S.Figure>
              <S.Img
              src={Rc}/>
            </S.Figure>
          </S.Link>
        </S.ProjectCard>
        </Parousel>
     
      
      </S.Container>
   
    
  );
}
