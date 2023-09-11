import styled from "styled-components";

export const SobreProjeto = styled.div`
  color: #fff;
  font-family: CalibreRegular;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  p {
    text-align: justify;
    font-size: 1.4rem;
  }
  h3 {
    color: #999b9f ${({ theme }) => theme.projeto};
    letter-spacing: 1px;
  }
  @media screen and (max-width: 500px) {
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  h3 {
    width: 200px;
  }
  a {
    width: 70px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  li {
    list-style: none;

    font-size: 1.1rem;
  }
`;
