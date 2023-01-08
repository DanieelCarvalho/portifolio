import React from "react";
import * as S from "./style"
import { TypeAnimation } from 'react-type-animation';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import Cafe from "../../..//img/cafe.png"
import Fumaca from "../Home/Fumaça"

export default function Home() {


  return (
    <S.Section>

      <S.Div>
        <div>
      
          <S.H4>olá, meu nome é</S.H4>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              'daniel carvalho',
              1000
            ]}
            speed={1} //
            style={{
              fontSize: "clamp(2rem, 3rem, 6rem)", color: "#FEE251", textTransform: 'uppercase', fontFamily: "CalibreRegular"
            }}
    
          />

          <S.H2>desenvolvedor front-end</S.H2>
        </div>
        <Fumaca/>
       
      </S.Div>
      <S.SectionTwo>
        <S.Link target="_blank" href="https://www.linkedin.com/in/danieelcarvalho/" >

          <S.Linkedin />
          <p>
            Linkedin
          </p>
        </S.Link>

        <S.Link target="_blank" href="https://github.com/DanieelCarvalho" >
          <S.Github />
          <p>Github</p>
        </S.Link>
      </S.SectionTwo>
    </S.Section>

  );
}
