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
        star="https://danieelcarvalho.github.io/ProjetoStarWars/"
        imapay="https://imapay-troopers.netlify.app/"
        TenisExpress="https://tenis-express.vercel.app/"
        Dctask="https://dctask.vercel.app/"
      />

      <CarouselResponsivo
        title="Meus Projetos"
        star="https://danieelcarvalho.github.io/ProjetoStarWars/"
        imapay="https://imapay-troopers.netlify.app/"
        TenisExpress="https://tenis-express.vercel.app/"
        Dctask="https://dctask.vercel.app/"
      />
    </S.AboutSection>
  );
}
