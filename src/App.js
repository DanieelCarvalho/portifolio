import React from "react";
import Header from "./Componentes/Header/Header";
import * as S from "./Componentes/Styles/AppStyle";

export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Header link1="Inicio" link2="Sobre" link3="Projetos" link4="Ods"/>
    </div>
  );
}
