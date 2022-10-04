import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "../Pages/About/About.js";
import Works from "../Pages/Projetos/Projetos"
import Onu from "../Pages/Ods/Ods.js";
import * as S from "../Styles/HeaderStyle";

export default function Header({ link1, link2, link3 }) {
  return (
    <BrowserRouter>
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Li>
              <S.LinkS to="/about">{link1}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/works">{link2}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/ods">{link3}</S.LinkS>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/ods" element={<Onu />} />
        <Route path="*" element={<Navigate to="/works" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
