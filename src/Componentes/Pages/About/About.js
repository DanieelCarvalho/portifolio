import React, { useState } from "react";
import Props from "./Props.js";
import * as S from "../../Styles/AboutStyle";
import Daniel from "../../../img/Perfil12.jpg"

export default function About() {


  return (
    <S.Section>

      <S.Titulo>
        <S.H1>
          Sobre mim
        </S.H1>
        <S.Linha></S.Linha>
      </S.Titulo>


      <S.SectionB>
        <S.Div>
        <S.P>
          Olá! meu nome é Daniel Carvalho, tenho 29 anos de idade e moro em Nova Iguaçu, Baixada Fluminense, no Rio de Janeiro. Sou Formado em história pela UFRRJ. Conheci um pouco melhor sobre o mundo do desenvolvimento web através de um amigo no final de 2021. Fiquei interessado de cara! E desde então venho estudando todos os dias para me tornar um bom desenvolvedor front-end.
        </S.P>
        </S.Div>
        
        <S.Figure>
        <S.BarraFoto>
          </S.BarraFoto>
        <S.Foto src={Daniel} alt="Minha foto de perfil" />
        </S.Figure>
        
      
      </S.SectionB>

    </S.Section>
  );
}
