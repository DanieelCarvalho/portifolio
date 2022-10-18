import React from "react";
import styled from "styled-components";
import * as S from "../../Styles/ProjetosStyle";
import Sobre from "../Projetos/SobreProjeto"
import Carousel from 'nuka-carousel';
import CarouselResponsivo from "./Carousel";
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
import Ods from "../../Assets/Ods.jpg"
import { display, height } from "@mui/system";

const Parousel = styled(Carousel)`
  
  

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
  witcher,
  ods
}) {
  const settings = {
    dots: true,
    wrapAround: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    cellAlign: "center",
    cellSpacing: 1,
    slidesToScroll: 1,
    dragThreshold: 1,
    adaptiveWidth: true,
    enableKeyboardControls: true,
    defaultControlsConfig: {
      nextButtonText: ">",
      prevButtonText: "<",
      pagingDotsStyle: {
        fill: "#FEE251",
        display: ""
      },
      nextButtonStyle: {
        border: "none",
        backgroundColor: "none",
        color: " #FEE251"
      },
      prevButtonStyle: {

        border: "none",
        backgroundColor: "none",
        color: " #FEE251",
      }

    }

  }



  return (
    <div>
      <S.Caixa>

        <S.Title>{title}</S.Title>
        <Parousel {...settings} >
          <S.ProjectCard>
            <S.Link href={beat} target="_blanck" title="Beat">
              <S.Figure>
                <S.Img src={Beat} alt="foto do projeto" />
              </S.Figure>
            </S.Link>
            <Sobre titulo={"Beat"} paragrafo={"Site produzido com base em um design do Vai na Web, usando HTML E CSS. Neste desafio aprendemos sobre display-flex"} link={"https://github.com/DanieelCarvalho/Beat"} linguagem1={"Html"} linguagem2={"CSS"} />
          </S.ProjectCard>


          <S.ProjectCard>
            <S.Link href={calc} target="_blanck" title="Calculadora">
              <S.Figure>
                <S.Img src={Calc} alt="foto do projeto" />
              </S.Figure>
            </S.Link>
            <Sobre titulo={"Calculadora"} paragrafo={"Desafio proposto pela Vai na Web de criar uma calculadora usando componente de classe onde tivesse pelo menos um botão para limpar o resultado da tela e limpar os inputs"} link={"https://github.com/DanieelCarvalho/calculadora-react"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
          </S.ProjectCard>


          <S.ProjectCard>
            <S.Link href={harry} target="_blanck" title="Harry Potter">
              <S.Figure>
                <S.Img src={Harry} />
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Harry Potter"} paragrafo={"Desafio da Vai na Web de consumir uma API utilizando useEffect "} link={"https://github.com/DanieelCarvalho/harry-potter"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={lista} target="_blanck" title="Lista de Compras">
              <S.Figure>
                <S.Img src={Lista} />
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Lista de Compras"} paragrafo={"O Desafio proposto era de fazer um ToDo com uma função de adicionar tarefa e de remover tarefa. A partir disso, eu tive a ideia de fazer uma lista de compras"} link={"https://github.com/DanieelCarvalho/lista-de-compras"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={movie} target="_blanck" title="Movie top +">
              <S.Figure>
                <S.Img src={Movie} />
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Movie Top+"} paragrafo={"Desafio de consumir uma API de filmes com estilização livre. Minha ideia foi criar uma página onde você pudesse saber quais os filmes mais populares do momento"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={pokedex} target="_blanck" title="Pokedex">
              <S.Figure>
                <S.Img src={Pokedex} />
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Pokedex"} paragrafo={"Primeira vez em que consumi uma APi, com ajuda do canal do Youtube Manual do Dev "} link={"https://github.com/DanieelCarvalho/Pok-dex"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"JavaScript"} />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={star} target="_blanck" title="Star Wars">
              <S.Figure>
                <S.Img src={Star} />
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Star Wars"} paragrafo={"Desafio final do primeiro módulo da Vai na Web"} link={"https://github.com/DanieelCarvalho/ProjetoStarWars"} linguagem1={"Html"} linguagem2={"CSS"} />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={witcher} target="_blanck" paragrafo={""} title="the Witcher">
              <S.Figure>
                <S.Img src={Witcher} />
              </S.Figure>

            </S.Link>
            <Sobre titulo={"The Witcher"} paragrafo={"Site produzido com base em um design fornecido pelo Vai na we. Esse foi desafio final do Módulo 1 do curso."} link={"https://github.com/DanieelCarvalho/witcher"} linguagem1={"Html"} linguagem2={"CSS"} />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={rc} target="_blanck" title="Rc">
              <S.Figure>
                <S.Img
                  src={Rc} />
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Recipes"} paragrafo={"Projeto desenvolvido em parceria com um colega para treinar práticas de programação utilizando o GitHub."} link={"https://github.com/KermitTheSapo/Recipes-vnw"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
          </S.ProjectCard>
          
          <S.ProjectCard>
            <S.Link href={ods} target="_blanck" title="Ods">
              <S.Figure>
                <S.Img
                  src={Ods} alt="imagem da página"/>
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Ods"} paragrafo={"O objetivo desse projeto é mostrar os Objetivos de Desenvolvimento Sustentável, proposto pela Onu, na minha cidade "} link={"https://github.com/KermitTheSapo/Recipes-vnw"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
          </S.ProjectCard>
        </Parousel>

      </S.Caixa>
    
    </div>

  );
}


