import React from "react";
import * as S from "../../Styles/HomeStyle";
import Smoke from "../../../img/smoke.png"
import Cafe from "../../..//img/cafe3.png"

export default function Fumaca() {

    return (
        <S.SectionSmoke>
            <S.SmokeWrap>
                <S.Smoke src={Smoke} alt="smoke"/>
            </S.SmokeWrap>

            <S.SmokeWrap>
                <S.Smoke2  src={Smoke} alt="smoke"/>
            </S.SmokeWrap>

            <S.SmokeWrap>
                <S.Smoke3 src={Smoke} alt="smoke"/>
            </S.SmokeWrap>
            <S.Cafe src={Cafe} />
        </S.SectionSmoke>
    )
};