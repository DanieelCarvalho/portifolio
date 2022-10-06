import React from "react";
import * as S from "../../Styles/HomeStyle"
import { TypeAnimation } from 'react-type-animation';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Home() {


  return (
    <S.Section>
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
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

        <S.H2>desenvolvedor front-end</S.H2>
      </div>
      <S.SectionTwo>
        <S.Link target="_blank" href="https://www.linkedin.com/in/danieelcarvalho/" >
          <S.Button >

            <FiLinkedin style={{
              fontSize: "clamp(1rem, 2rem, 3rem)", color: "#999b9f", textTransform: 'uppercase', fontFamily: "CalibreRegular"
            }} />
            Linkedin
          </S.Button>
        </S.Link>

        <S.Link target="_blank" href="https://github.com/DanieelCarvalho" >
          <S.Button  >
            <FiGithub style={{
              fontSize: "clamp(1rem, 2rem, 3rem)", color: "#999b9f", textTransform: 'uppercase', fontFamily: "CalibreRegular"
            }} />

            <p>Github</p>
          </S.Button>
        </S.Link>
      </S.SectionTwo>
    </S.Section>

  );
}
