import {lightTheme, darkTheme} from "../Theme";
import Header from "../Header";
import Footer from "../Footer"
import {ThemeProvider } from "styled-components";
import{useState} from "react"
import * as S from "./style";


export default function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return ( 
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <S.Container>
      <S.GlobalStyle />
      <Header link1="Inicio" link2="Sobre" link3="Projetos" theme={theme} toggleTheme={toggleTheme} />
      <Footer/>
     </S.Container>
    </ThemeProvider>
  );
}
 