import React from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import Sobre from "../sobreProjeto";
import * as S from "../style";
import Beat from "../../../../Assets/Beat.jpg";

import Calc from "../../../../Assets/calc.jpg";
import Harry from "../../../../Assets/harry.jpg";
import Lista from "../../../../Assets/Listadecomprar.jpg";
import Movie from "../../../../Assets/Movietop+.jpg";
import Pokedex from "../../../../Assets/pokedex.jpg";
import Star from "../../../../Assets/Projetostarwars.jpg";
import Witcher from "../../../../Assets/thewitcher.jpg";
import Ods from "../../../../Assets/Ods.jpg";
import Rc from "../../../../Assets/Rc.jpg";
import ImaPay from "../../../../Assets/payjpg.jpg";
import ByteBank from "../../../../Assets/ByteBank.jpg";
import PetShop from "../../../../Assets/PetShop.jpg";

const Responsivo = styled(Carousel)``;

export default function CarouselResponsivo({
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
  ods,
  imapay,
}) {
  const settings = {
    dots: true,
    wrapAround: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
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
    <S.CaixaR>
      <S.CaixaTitulo>
        <S.Title>Meus Trabalhos</S.Title>
        <S.Linha></S.Linha>
      </S.CaixaTitulo>
      <Responsivo {...settings}>
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
          <S.Link href={beat} target="_blanck" title="Beat">
            <S.Figure>
              <S.Img src={Beat} alt="foto do projeto" />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Beat"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/Beat"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
          />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={calc} target="_blanck" title="Calculadora">
            <S.Figure>
              <S.Img src={Calc} alt="foto do projeto" />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Calculadora"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/calculadora-react"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
            linguagem3={"ReactJS"}
          />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={harry} target="_blanck" title="Harry Potter">
            <S.Figure>
              <S.Img src={Harry} />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Harry Potter"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/harry-potter"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
            linguagem3={"ReactJS"}
          />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={lista} target="_blanck" title="Lista de Compras">
            <S.Figure>
              <S.Img src={Lista} />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Lista de Compras"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/lista-de-compras"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
            linguagem3={"ReactJS"}
          />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={movie} target="_blanck" title="Movie top +">
            <S.Figure>
              <S.Img src={Movie} />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Movie Top+"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/MovieTop"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
            linguagem3={"ReactJS"}
          />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={pokedex} target="_blanck" title="Pokedex">
            <S.Figure>
              <S.Img src={Pokedex} />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Pokedex"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/Pok-dex"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
            linguagem3={"JavaScript"}
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
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/ProjetoStarWars"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
          />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link
            href={witcher}
            target="_blanck"
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            title="the Witcher"
          >
            <S.Figure>
              <S.Img src={Witcher} />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"The Witcher"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/DanieelCarvalho/witcher"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
          />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={rc} target="_blanck" title="Rc">
            <S.Figure>
              <S.Img src={Rc} />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Recipes"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/KermitTheSapo/Recipes-vnw"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
            linguagem3={"ReactJS"}
          />
        </S.ProjectCard>
        <S.ProjectCard>
          <S.Link href={ods} target="_blanck" title="Ods">
            <S.Figure>
              <S.Img src={Ods} alt="imagem da página" />
            </S.Figure>
          </S.Link>
          <Sobre
            titulo={"Ods"}
            paragrafo={
              "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça."
            }
            link={"https://github.com/KermitTheSapo/Recipes-vnw"}
            linguagem1={"Html"}
            linguagem2={"CSS"}
            linguagem3={"ReactJS"}
          />
        </S.ProjectCard>
      </Responsivo>
    </S.CaixaR>
  );
}
