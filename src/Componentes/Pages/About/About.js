import React, { useState } from "react";

import styled from "styled-components";
import * as S from "../../Styles/AboutStyle";
import Daniel from "../../../img/Perfil12.jpg"
import { FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';

import Curriculo from "../../../curriculo/CurrículoDanielCarvalho.pdf"

export default function About() {

  return (
    <S.Section>
      <S.Titulo>
        <S.H1>
          Sobre mim
        </S.H1>
        <S.Linha></S.Linha>
      </S.Titulo>
      <S.SectionTwo>

        <S.Div>
          <S.P>
            Olá! meu nome é Daniel Carvalho, tenho 29 anos de idade e moro em Nova Iguaçu, Baixada Fluminense, no Rio de Janeiro. Sou Formado em história pela UFRRJ. Conheci um pouco melhor sobre o mundo do desenvolvimento web através de um amigo no final de 2021. Fiquei interessado de cara! E desde então venho estudando todos os dias para me tornar um bom desenvolvedor front-end.
          </S.P>

          <S.DivTwo>
            <S.Link target="_blank" href="https://www.instagram.com/danielcgy/" >

              <S.Instagram />
              <p>
                Instagram
              </p>

            </S.Link>

            <S.Link href={Curriculo} download={Curriculo}>
              <S.Download />
              <p>Currículo</p>

            </S.Link>

          </S.DivTwo>
        </S.Div>

        <S.Figure>
          <S.BarraFoto>
          </S.BarraFoto>
          <S.Foto src={Daniel} alt="Minha foto de perfil" />
        </S.Figure>

      </S.SectionTwo>
    </S.Section>
  );
}
