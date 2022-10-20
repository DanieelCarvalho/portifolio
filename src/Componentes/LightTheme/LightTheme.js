import React from 'react'
import { func, string } from 'prop-types';
import { ReactComponent as MoonIcon } from '../../img/moon.svg';
import { ReactComponent as SunIcon } from '../../img/sun.svg';
import * as S from "../Styles/LightThemeStyle";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'dark';
  return (
    <S.Botao lightTheme={isLight} onClick={toggleTheme} >
        <MoonIcon />
      <SunIcon />
      
    </S.Botao>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;