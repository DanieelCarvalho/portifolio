import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About/index.js";
import Works from "../Pages/Projetos";
import Home from "../Pages/Home/Home";
import Foto1 from "../../img/x-thin (2).svg";
import Foto2 from "../../img/list-thin (1).svg";
import * as S from "./style";
import Light from "../Theme/LightTheme";
import DadosModalContext from "../../context/DadosModalContext/";

export default function Header({ link1, link2, link3, theme, toggleTheme }) {
  //const [fecha, setFecha] = useState(false);
  const { open, setOpen } = useContext(DadosModalContext);

  const Modal = () => {
    return (
      <nav>
        <S.Ul>
          <S.Li>
            <S.LinkS to="/">{link1}</S.LinkS>
          </S.Li>
          <S.Li>
            <S.LinkS to="/about">{link2}</S.LinkS>
          </S.Li>
          <S.Li>
            <S.LinkS to="/works">{link3}</S.LinkS>
          </S.Li>
        </S.Ul>
      </nav>
    );
  };
  return (
    <BrowserRouter>
      <S.Modal>
        <S.Botao onClick={() => setOpen(!open)}>
          {open === true ? (
            <S.Foto1 src={Foto1} alt="oi" />
          ) : (
            <S.Foto src={Foto2} alt="X" />
          )}
        </S.Botao>
        {open && Modal()}
      </S.Modal>

      <S.Header>
        <S.CaixaLogo>
          <S.Logo>
            <S.LinkLogo to="/">D</S.LinkLogo>
          </S.Logo>
        </S.CaixaLogo>
        <Light theme={theme} toggleTheme={toggleTheme} />
        <S.Nav>
          <S.Ul>
            <S.Li>
              <S.LinkS to="/">{link1}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/about">{link2}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/works">{link3}</S.LinkS>
            </S.Li>
            <S.Li>
              <Light theme={theme} toggleTheme={toggleTheme} />
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}
