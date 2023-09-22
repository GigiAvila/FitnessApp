import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import { themeLight, themeDark } from '../../Styles/theme';
import { Outlet } from 'react-router-dom';
import { MainWrapper, MainOutlet } from './Main.Styles.jsx'

const Main = ({ themeProvide, setThemeProvide }) => {

  const toggleTheme = () => {
    setThemeProvide(themeProvide === themeLight ? themeDark : themeLight);
  };

  return (
    <MainWrapper>
      <Header themeProvide={themeProvide} />
      <MainOutlet>
        <Outlet />
      </MainOutlet>
      <Navbar themeProvide={themeProvide} toggleTheme={toggleTheme} />
    </MainWrapper>
  );
};

export default Main;
