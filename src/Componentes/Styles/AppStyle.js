import { createGlobalStyle } from "styled-components";
import SFMono from '../../Fonte/sf-mono-font/SF-Mono-Bold.ttf'


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@font-face {
        font-family: "SF-Mono-Bold";
        src: url(${SFMono});
    }
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Calibre', sans-serif;
  background-color: #121212;
 
                                                
}
`;
