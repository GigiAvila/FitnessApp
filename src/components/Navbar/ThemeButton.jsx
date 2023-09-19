import React from 'react';
import { useTheme } from '@emotion/react';
import { themeLight, themeDark } from '../../Styles/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeButton = ({ action, themeProvide }) => {
  const theme = useTheme();

  const toggleButtonText = themeProvide === themeLight ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <button
      style={{
        background: theme.palette.ImpButtonBgColor,
        color: theme.palette.ImpButtonColorText,
        border: 'none',
        outline: 'none',
        display: 'flex',
      }}
      onClick={action}
    >
      {toggleButtonText}
    </button>
  );
};

export default ThemeButton;
