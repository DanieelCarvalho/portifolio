import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 8vh;
    border-top: solid #272727 1px;
    border-color:  ${({ theme }) => theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Link =styled.a`
   
`
export const Paragrafo = styled.p`
      color: #fff;
    font-family: "SF-Mono-Bold";
    font-size: clamp(0.5rem, 0.6rem, 2rem);
   
` 