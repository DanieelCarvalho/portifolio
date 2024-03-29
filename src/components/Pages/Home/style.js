import styled from "styled-components";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export const Section = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-height: 500px) {
    height: 115vh;
  }
`;

export const H4 = styled.h4`
  color: #fff ${({ theme }) => theme.LinkHeader};
  font-family: CalibreRegular;
  text-transform: uppercase;
  font-size: clamp(1rem, 2.2rem, 5rem);
`;

export const H1 = styled.h1`
  color: #fee251;
  font-family: CalibreRegular;
  text-transform: uppercase;
  font-size: clamp(2rem, 3rem, 6rem);
`;

export const H2 = styled.h2`
  color: #fff ${({ theme }) => theme.LinkHeader};
  font-family: CalibreRegular;
  text-transform: uppercase;
  font-size: clamp(1rem, 2.2rem, 5rem);
`;
export const SectionTwo = styled.section`
  width: 40%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-height: 500px) {
    height: 20vh;
  }
`;
export const Linkedin = styled(FiLinkedin)`
  font-size: clamp(1rem, 1.6rem, 2rem);
  color: #999b9f ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: CalibreRegular;
  transition: 0.1s;
`;
export const Github = styled(FiGithub)`
  font-size: clamp(1rem, 1.6rem, 2rem);
  color: #999b9f ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: CalibreRegular;
  transition: 1s;
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
  border-color: ${({ theme }) => theme.LinkHeader};
  border-radius: 10px;
  color: #999b9f;
  color: ${({ theme }) => theme.projeto};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border-color: #fee251;
    transform: scale(1.1);
    color: #fee251;
    ${Github} {
      transform: rotate(360deg);
    }
    ${Linkedin} {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 500px) {
    width: 150px;
    color: #fee251;
  }
`;
export const Cafe = styled.img`
  width: 20vw;
  height: 40vh;

  filter: grayscale(2);
`;
export const SmokeWrap = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 47%;
  bottom: 79%;
  z-index: 2;
  background-color: none;
  color: ${({ theme }) => theme.home};
  filter: ${({ theme }) => theme.fumaca};
`;
export const SectionSmoke = styled.section`
  position: relative;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Smoke = styled.img`
  filter: blur(5px);
  transform-origin: 50% 50%;
  animation: smoke1 3s linear infinite;
  animation-delay: 0.5s;
  height: 12vh;
  width: 7vw;
  border: none;
  filter: brightness(5);

  @keyframes smoke1 {
    0% {
      filter: blur(0px);
      transform: translateY(0px) scale(-1, 1);
      opacity: 0;
    }

    25% {
      filter: blur(3px);
      transform: translateY(-10px) scale(-1, 1.05);
      opacity: 0.5;
    }

    50% {
      filter: blur(5px);
      transform: translateY(-20px) scale(-1, 1.1);
      opacity: 1;
    }

    75% {
      filter: blur(5px);
      transform: translateY(-30px) scale(-1, 1.15);
      opacity: 0.5;
    }

    100% {
      filter: blur(7px);
      transform: translateY(-40px) scale(-1, 1.2);
      opacity: 0;
    }
  }
`;
export const Smoke2 = styled.img`
  filter: blur(5px);
  transform-origin: 50% 50%;
  animation: smoke2 3s linear infinite;
  animation-delay: 1.5s;
  height: 12vh;
  width: 7vw;
  border: none;

  @keyframes smoke2 {
    0% {
      filter: blur(0px);
      transform: translateY(0px) scale(1);
      opacity: 0;
    }

    25% {
      filter: blur(3px);
      transform: translateY(-10px) scale(1.05);
      opacity: 0.5;
    }

    50% {
      filter: blur(5px);
      transform: translateY(-20px) scale(1.1);
      opacity: 1;
    }

    75% {
      filter: blur(5px);
      transform: translateY(-30px) scale(1.15);
      opacity: 0.5;
    }

    100% {
      filter: blur(7px);
      transform: translateY(-40px) scale(1.2);
      opacity: 0;
    }
  }
`;
export const Smoke3 = styled.img`
  filter: blur(5px);
  transform-origin: 50% 50%;
  animation: smoke3 4s linear infinite;
  height: 12vh;
  width: 7vw;
  border: none;

  filter: brightness(5);

  @keyframes smoke3 {
    0% {
      filter: blur(0px);
      transform: translateY(0px) scale(1);
      opacity: 0;
    }

    25% {
      filter: blur(3px);
      transform: translateY(-20px) scale(1.05);
      opacity: 0.5;
    }

    50% {
      filter: blur(5px);
      transform: translateY(-40px) scale(1.1);
      opacity: 1;
    }

    75% {
      filter: blur(5px);
      transform: translateY(-60px) scale(1.15);
      opacity: 0.5;
    }

    100% {
      filter: blur(7px);
      transform: translateY(-80px) scale(1.2);
      opacity: 0;
    }
  }
`;
