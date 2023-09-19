import React, { useState } from 'react';
import ThemeButton from './ThemeButton';
import { NavWrapper, Nav, NavLink } from './Styles';
import { useTheme } from '@emotion/react';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import Person2Icon from '@mui/icons-material/Person2';

const Navbar = ({ themeProvide, toggleTheme }) => {
  const theme = useTheme();

  return (
    <NavWrapper>
      <Nav style={{
        background: theme.palette.ImpButtonBgColor,
        color: theme.palette.ImpButtonColorText
      }}>
        <NavLink to='home' ><HomeIcon /></NavLink>
        <NavLink to='routines'><RocketLaunchIcon /></NavLink>
        <NavLink to='history'><BarChartIcon /></NavLink>
        <NavLink to='profile'><Person2Icon /></NavLink>
        <ThemeButton action={toggleTheme} themeProvide={themeProvide} />
      </Nav>
    </NavWrapper>

  );
};

export default Navbar;

