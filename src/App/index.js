import { lightTheme, darkTheme } from "../components/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import * as S from "./style";
import DadosModalContext from "../context/DadosModalContext";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <DadosModalContext.Provider value={{ open, setOpen }}>
        <S.Container onClick={() => (open === true ? setOpen(false) : null)}>
          <S.GlobalStyle />
          <Header
            link1="Inicio"
            link2="Sobre"
            link3="Projetos"
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <Footer />
        </S.Container>
      </DadosModalContext.Provider>
    </ThemeProvider>
  );
}
