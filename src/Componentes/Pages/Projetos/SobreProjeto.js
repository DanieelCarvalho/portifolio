import React from "react";
import styled from "styled-components"
import { FiGithub } from 'react-icons/fi';
import * as S from "../../Styles/SobreProjetoStyle";


const Figurinha = styled(FiGithub)`
    font-size:clamp(1rem, 1.5rem, 3rem) ;
    color: #999b9f ;
    color:${({ theme }) => theme.projeto  };
    transition: 0.6s;
    :hover{
        color: #FEE251;
        transform: rotate(360deg);
    }
`

export default function SobreProjeto({ titulo, paragrafo, link, linguagem1, linguagem2, linguagem3, }) {
    return (

        <S.SobreProjeto>
            <h3>{titulo}</h3>


            <p>{paragrafo}</p>
            <S.Div>
                <ul>
                <li>{linguagem1}</li>
                <li>{linguagem2}</li>
                <li>{linguagem3}</li>
                </ul>
                <a target="_blank" href={link} >
                    <Figurinha  />
                </a>
            </S.Div>
        </S.SobreProjeto>
    )
}