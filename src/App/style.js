import styled, { createGlobalStyle } from "styled-components";
import SFMono from "../Fonte/sf-mono-font/SF-Mono-Bold.ttf";
import Calibre from "../Fonte/calibre/CalibreRegular.otf";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@font-face {
        font-family: "SF-Mono-Bold";
        src: url(${SFMono});
    }
    @font-face {
        font-family: "CalibreRegular";
        src: url(${Calibre});
    }
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
                                   
}
 html {
    font-size: 62.5%;
  }
body{
  background-color:  #121212;
  background: ${({ theme }) => theme.teste};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;   
}
p{
  
}


`;
export const Button = styled.button`
  border: solid red;
`;
export const Container = styled.section``;
