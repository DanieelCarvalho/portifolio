import React from "react";
import Carousel from 'nuka-carousel';
import styled from "styled-components";
import Sobre from "../sobreProjeto"
import * as S from "../style";
import Beat from "../../../Assets/Beat.jpg";
import Calc from "../../../Assets/calc.jpg";
import Harry from "../../../Assets/harry.jpg";
import Lista from "../../../Assets/Listadecomprar.jpg";
import Movie from "../../../Assets/Movietop+.jpg";
import Pokedex from "../../../Assets/pokedex.jpg";
import Star from "../../../Assets/Projetostarwars.jpg";
import Witcher from "../../../Assets/thewitcher.jpg";
import Ods from "../../../Assets/Ods.jpg"
import Rc from "../../../Assets/Rc.jpg"

const Responsivo = styled(Carousel)`

 
 
`

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
  ods



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
        display:""
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

    <S.CaixaR>
      <S.CaixaTitulo>
        <S.Title>
        Meus Trabalhos
        </S.Title>
        <S.Linha></S.Linha>
      </S.CaixaTitulo>
      <Responsivo {...settings}>
        <S.ProjectCard>
          <S.Link href={beat} target="_blanck" title="Beat">
            <S.Figure>
              <S.Img src={Beat} alt="foto do projeto" />
            </S.Figure>
          </S.Link>
          <Sobre titulo={"Beat"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/Beat"} linguagem1={"Html"} linguagem2={"CSS"} />
        </S.ProjectCard>


        <S.ProjectCard>
          <S.Link href={calc} target="_blanck" title="Calculadora">
            <S.Figure>
              <S.Img src={Calc} alt="foto do projeto" />
            </S.Figure>
          </S.Link>
          <Sobre titulo={"Calculadora"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/calculadora-react"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
        </S.ProjectCard>


        <S.ProjectCard>
          <S.Link href={harry} target="_blanck" title="Harry Potter">
            <S.Figure>
              <S.Img src={Harry} />
            </S.Figure>

          </S.Link>
          <Sobre titulo={"Harry Potter"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/harry-potter"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={lista} target="_blanck" title="Lista de Compras">
            <S.Figure>
              <S.Img src={Lista} />
            </S.Figure>

          </S.Link>
          <Sobre titulo={"Lista de Compras"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/lista-de-compras"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={movie} target="_blanck" title="Movie top +">
            <S.Figure>
              <S.Img src={Movie} />
            </S.Figure>

          </S.Link>
          <Sobre titulo={"Movie Top+"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/MovieTop"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={pokedex} target="_blanck" title="Pokedex">
            <S.Figure>
              <S.Img src={Pokedex} />
            </S.Figure>

          </S.Link>
          <Sobre titulo={"Pokedex"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/Pok-dex"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"JavaScript"} />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={star} target="_blanck" title="Star Wars">
            <S.Figure>
              <S.Img src={Star} />
            </S.Figure>

          </S.Link>
          <Sobre titulo={"Star Wars"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/ProjetoStarWars"} linguagem1={"Html"} linguagem2={"CSS"} />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={witcher} target="_blanck" paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} title="the Witcher">
            <S.Figure>
              <S.Img src={Witcher} />
            </S.Figure>

          </S.Link>
          <Sobre titulo={"The Witcher"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/DanieelCarvalho/witcher"} linguagem1={"Html"} linguagem2={"CSS"} />
        </S.ProjectCard>

        <S.ProjectCard>
          <S.Link href={rc} target="_blanck" title="Rc">
            <S.Figure>
              <S.Img
                src={Rc} />
            </S.Figure>

          </S.Link>
          <Sobre titulo={"Recipes"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/KermitTheSapo/Recipes-vnw"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
        </S.ProjectCard>
        <S.ProjectCard>
            <S.Link href={ods} target="_blanck" title="Ods">
              <S.Figure>
                <S.Img
                  src={Ods} alt="imagem da p??gina"/>
              </S.Figure>

            </S.Link>
            <Sobre titulo={"Ods"} paragrafo={"Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.N??o sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabe??a."} link={"https://github.com/KermitTheSapo/Recipes-vnw"} linguagem1={"Html"} linguagem2={"CSS"} linguagem3={"ReactJS"} />
          </S.ProjectCard>
      </Responsivo>

    </S.CaixaR>



  );
}