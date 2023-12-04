import React from "react";
import styled from "styled-components";
import * as S from "../../style";
import Sobre from "..";
import Carousel from "nuka-carousel";
import Star from "../../../../../Assets/Projetostarwars.jpg";
import ImaPay from "../../../../../Assets/payjpg.jpg";
import ByteBank from "../../../../../Assets/ByteBank.jpg";
import PetShop from "../../../../../Assets/PetShop.jpg";
import TP from "../../../../../Assets/TP.jpg";
import DcTask from "../../../../../Assets/Dctask.jpg";

const Parousel = styled(Carousel)``;

export default function Projetos({
  title,
  star,
  imapay,
  TenisExpress,
  Dctask,
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
        display: "",
      },
      nextButtonStyle: {
        border: "none",
        backgroundColor: "none",
        color: " #FEE251",
      },
      prevButtonStyle: {
        border: "none",
        backgroundColor: "none",
        color: " #FEE251",
      },
    },
  };

  return (
    <div>
      <S.Caixa>
        <S.Title>{title}</S.Title>
        <Parousel {...settings}>
          <S.ProjectCard>
            <S.Link href={imapay} target="_blanck" title="ImaPay">
              <S.Figure>
                <S.Img src={ImaPay} alt="imagem da página" />
              </S.Figure>
            </S.Link>
            <Sobre
              titulo={"ImaPay"}
              paragrafo={
                "O projeto Ima-Pay é um projeto feito durante o bootcamp da Ima Tech no programa SharpCoders. Neste projeto em grupo fora desenvolvido uma aplicação de um banco, utilizando uma tematica de Star Wars."
              }
              link={"https://github.com/SharpTroppers/ImaPay"}
              linguagem1={"React"}
              linguagem2={"C#"}
              linguagem3={"TypeScript"}
              linguagem4={"MySql"}
              linguagem5={"Postman"}
              linguagem6={"Javascript"}
            />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={Dctask} target="_blanck" title="TenisExpress">
              <S.Figure>
                <S.Img src={DcTask} alt="imagem da página" />
              </S.Figure>
            </S.Link>
            <Sobre
              titulo={"Dctask"}
              paragrafo={
                "Gerenciador de tarefas com cadastro e login com a percistencia dos dados no localStorage"
              }
              link={"https://github.com/DanieelCarvalho/Gerenciador-de-tarefas"}
              linguagem1={"Html"}
              linguagem2={"CSS"}
              linguagem3={"Javascript"}
            />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={TenisExpress} target="_blanck" title="TenisExpress">
              <S.Figure>
                <S.Img src={TP} alt="imagem da página" />
              </S.Figure>
            </S.Link>
            <Sobre
              titulo={"TenisExpress"}
              paragrafo={
                "Projeto final do bootcamp do Instituto NuBank em parceria com Descomplica."
              }
              link={"https://github.com/DanieelCarvalho/TenisExpress"}
              linguagem1={"Html"}
              linguagem2={"CSS"}
              linguagem3={"React"}
            />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link target="_blanck" title="ByteBank">
              <S.Figure>
                <S.Img src={ByteBank} alt="imagem da página" />
              </S.Figure>
            </S.Link>
            <Sobre
              titulo={"ByteBank"}
              paragrafo={
                "Projeto proposto durante a realização do Programa Sharp Coders da Imã Learning Place: desenvolver um banco digital com operações básicas."
              }
              link={"https://github.com/DanieelCarvalho/bytebank"}
              linguagem2={"C#"}
            />
          </S.ProjectCard>
          <S.ProjectCard>
            <S.Link target="_blanck" title="PetShop">
              <S.Figure>
                <S.Img src={PetShop} alt="imagem da página" />
              </S.Figure>
            </S.Link>
            <Sobre
              titulo={"PetShop"}
              paragrafo={
                "Desafio Final da formação: React (Celcoin), onde foi pedido para desenvolver um e-commerce."
              }
              link={"https://github.com/DanieelCarvalho/pet-shop"}
              linguagem1={"Html"}
              linguagem2={"CSS"}
              linguagem3={"React"}
            />
          </S.ProjectCard>

          <S.ProjectCard>
            <S.Link href={star} target="_blanck" title="Star Wars">
              <S.Figure>
                <S.Img src={Star} />
              </S.Figure>
            </S.Link>
            <Sobre
              titulo={"Star Wars"}
              paragrafo={"Desafio final do primeiro módulo da Vai na Web"}
              link={"https://github.com/DanieelCarvalho/ProjetoStarWars"}
              linguagem1={"Html"}
              linguagem2={"CSS"}
            />
          </S.ProjectCard>
        </Parousel>
      </S.Caixa>
    </div>
  );
}
