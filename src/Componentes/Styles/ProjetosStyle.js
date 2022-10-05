import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: calc(100vh - 45px);
 
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #fff;
  padding-top: 30px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  cursor: pointer;
`;

export const Ancora = styled.a`
  width: 380px;
  height: 210px;
  display: flex;
  flex-direction: column;

  &:hover img {
    transform: scale(1.2);
  }

  span {
    position: relative;
    z-index: 1;
    margin-top: -10px;
    padding: 10px;
    text-decoration: none;
    text-align: center;
    color: #fff;
    background-color: #303841;

    ::before {
      content: "< ";
      opacity: 0;
      transition: 0.3s;
    }

    ::after {
      content: " />";
      opacity: 0;
      transition: 0.5s;
    }
  }

  :hover span::before,
  :hover span::after {
    color: #ff7f50;
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;


  figure {
    overflow: hidden;
    max-width: 380px;
  }
`;

export const ProjectCard = styled.div``;
