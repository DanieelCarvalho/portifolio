import React from "react";
import Projetos from "./sobreProjeto/definição";
import CarouselResponsivo from "./CarouselResponsivo";
import * as S from "./style";

export default function Works() {
  return (
    <S.AboutSection>
      <Projetos
        title="Meus Projetos"
        beat="https://beat-eight.vercel.app/"
        calc="https://calculadora-react-umber.vercel.app/"
        harry="https://harry-potter-pink.vercel.app/"
        lista="https://lista-de-compras-fawn.vercel.app/"
        movie="https://movie-top.vercel.app/"
        pokedex="https://danieelcarvalho.github.io/Pok-dex/"
        star="https://danieelcarvalho.github.io/ProjetoStarWars/"
        rc="https://recipe-vnw.netlify.app/"
        witcher="https://witcher-nine.vercel.app/"
        ods="https://onu-ods.vercel.app/"
        imapay="https://imapay-troopers.netlify.app/"
      />

      <CarouselResponsivo
        title="Meus Projetos"
        beat="https://beat-eight.vercel.app/"
        calc="https://calculadora-react-umber.vercel.app/"
        harry="https://harry-potter-pink.vercel.app/"
        lista="https://lista-de-compras-fawn.vercel.app/"
        movie="https://movie-top.vercel.app/"
        pokedex="https://danieelcarvalho.github.io/Pok-dex/"
        star="https://danieelcarvalho.github.io/ProjetoStarWars/"
        rc="https://recipe-vnw.netlify.app/"
        witcher="https://witcher-nine.vercel.app/"
        ods="https://onu-ods.vercel.app/"
        imapay="https://imapay-troopers.netlify.app/"
      />
    </S.AboutSection>
  );
}
