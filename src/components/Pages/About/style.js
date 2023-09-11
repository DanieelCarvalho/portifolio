import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";

export const H1 = styled.h1`
  font-family: CalibreRegular;
  font-size: clamp(2rem, 3rem, 4rem);
  width: 250px;
  @media screen and (max-width: 500px) {
    font-size: clamp(1rem, 2rem, 3rem);
    width: 150px;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 90vh;
  color: #fee251;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 120vh;
  }
  @media screen and (max-height: 500px) {
    height: 165vh;
  }
`;

export const Titulo = styled.div`
  display: flex;
  height: 200px;
  width: 60%;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;
export const Linha = styled.div`
  border-top: solid #999b9f;
  width: 20vw;
  margin-left: 10px;
  @media screen and (max-width: 500px) {
    width: 40vw;
    border-top: 0.5px solid #999b9f;
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    height: 850px;
  }
`;
export const Div = styled.div`
  width: 35vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const DivTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
export const P = styled.p`
  color: #fff;
  font-family: "CalibreRegular";
  font-size: clamp(0.1rem, 1.5rem, 1.7rem);
  text-align: justify;
  line-height: 26px;
  width: 31vw;
  height: 100vh;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Foto = styled.img`
  width: 22vw;
  height: 48vh;
  border-radius: 10px;
  z-index: 0;
  filter: brightness(0.4);
  transition: 2s;
  object-fit: cover;
  :hover {
    filter: none;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 52vh;
  }
`;
export const BarraFoto = styled.div`
  border-bottom: solid #fee251 1px;
  border-top: solid #fee251 1px;
  border-left: solid #fee251 1px;
  border-right: 1px solid #fee251;
  width: 22vw;
  height: 48vh;
  color: red;
  border-radius: 3px;
  position: absolute;
  left: 10%;
  bottom: -10%;
  transition-duration: 1s;
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 52vh;
  }
`;
export const Figure = styled.figure`
  position: relative;
  display: flex;
  &:hover {
    ${BarraFoto} {
      left: 5%;
      bottom: -5%;
    }
  }
`;
export const Instagram = styled(FiInstagram)`
  font-size: clamp(1rem, 1.5rem, 2rem);
  color: #999b9f ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: CalibreRegular;
  transition: 0.1s;
  width: 2vw;
  @media screen and (max-width: 500px) {
    width: 4vw;
  }
`;
export const Download = styled(BsDownload)`
  font-size: clamp(1rem, 1.6rem, 2rem);
  color: #999b9f ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: CalibreRegular;
  transition: 1s;
  width: 2vw;
  @media screen and (max-width: 500px) {
    width: 4vw;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  width: 12vw;
  height: 50px;
  display: flex;
  font-size: 1.1rem;
  font-family: "SF-Mono-Bold";
  align-items: center;
  justify-content: space-evenly;
  border: #999b9f solid 2px;
  border-color: ${({ theme }) => theme.text};
  border-radius: 10px;
  color: #999b9f;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  p {
    font-size: 1.1rem;
    @media screen and (max-width: 500px) {
      font-size: 1.1rem;
    }
  }
  transition: all 0.5s;
  &:hover {
    border-color: #fee251;
    transform: scale(1.1);
    color: #fee251;
    ${Instagram} {
      transform: rotate(20deg);
      transform: scale(1.1);
    }
    ${Download} {
      transform: scaleY(85%);
    }
  }

  @media screen and (max-width: 500px) {
    width: 30vw;
    color: #fee251;
  }
`;
