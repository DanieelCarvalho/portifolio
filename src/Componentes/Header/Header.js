import  React, {useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "../Pages/About/About.js";
import Works from "../Pages/Projetos/Projetos.js"
import Onu from "../Pages/Ods/Ods.js";
import Home from "../Pages/Home/Home"
import Foto1 from "../../img/xbranco.png"
import Foto2 from "../../img/menubranco.png"
import * as S from "../Styles/HeaderStyle";

export default function Header({ link1, link2, link3, link4 }) {

  const [open, setOpen] = useState(false)

  const Modal = () =>{
    return(
      
      <nav>
        <S.Ul>
          <S.Li>
            <S.LinkS to="/" onClick={() =>{
                open()
            }}>{link1}</S.LinkS>
          </S.Li>
          <S.Li>
            <S.LinkS to="/about" onClick={() =>{
                open()
            }}>{link2}</S.LinkS>
          </S.Li>
          <S.Li>
            <S.LinkS to="/works" onClick={() =>{
                open()
            }}>{link3}</S.LinkS>
          </S.Li>
          <S.Li>
            <S.LinkS to="/ods" onClick={() =>{
                open()
            }}>{link4}</S.LinkS>
          </S.Li>
        </S.Ul>
      </nav>
    
    )
  }
  return (
    <BrowserRouter>
    
    <S.Modal>
        <S.Botao  onClick={() =>{
                setOpen(!open)
            }}>
           {open ===true  ? <S.Foto1 src={Foto1} alt="oi" /> :  <S.Foto src={Foto2} alt="X"/>}
        </S.Botao>
        {open && Modal()}
        </S.Modal>

      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Li>
              <S.LinkS to="/" >{link1}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/about">{link2}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/works">{link3}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/ods">{link4}</S.LinkS>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/ods" element={<Onu />} />
      </Routes>
    </BrowserRouter>
  );
}
