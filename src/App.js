import React from "react";
import Header from "./Componentes/Header/Header";
import * as S from "./Componentes/Styles/AppStyle";

export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Header link1="Sobre" link2="Projetos" link3="Ods" />
    </div>
  );
}
