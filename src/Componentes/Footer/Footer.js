import React from "react";
import styled from 'styled-components';
import * as S from "../Styles/FooterStyle";
import { FiGithub } from 'react-icons/fi';

const Figurinha = styled(FiGithub)`
font-size:clamp(1rem, 1rem, 3rem) ;
color: #999b9f ;
color:${({ theme }) => theme.projeto  };
transition: 0.6s;
width: 50px;
:hover{
    color: #FEE251;
    transform: rotate(360deg);
}
`

export default function Footer(){
    return(
        <S.Container>
            <S.Paragrafo>
            Construído por Daniel Carvalho 
            </S.Paragrafo>
            <S.Link href="https://github.com/DanieelCarvalho/portifolio" target="_blank"> 
           
            <Figurinha  />
            </S.Link>
        </S.Container>
    )
}