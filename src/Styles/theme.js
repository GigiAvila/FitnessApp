

export const BreakPoints = {
  mobile: 576,
  tablet: 768,
  desktop: 992
}

const lightPalette = {
  background: '#f7f6f6',
  backgroundAlternative: '#a9b583',
  color: '#1d1d1c',
  titleColor: '#1d1d1c',
  ImpButtonBgColor: '#1d1d1c',
  ImpButtonColorText: '#e6e6e6',
  SecondaryButtonBgColor: '#e6e6e6',
  SecondaryButtonColorText: '#1d1d1c',
  border: '#1d1d1c',
  hoverColor: '#e6e6e6',
  iconColor: '#1d1d1c',
}

const darkPalette = {
  background: '#1d1d1c',
  backgroundAlternative: '#333327',
  color: '#f7f6f6',
  titleColor: ' #cde186 ',
  ImpButtonBgColor: '#d2ef76',
  ImpButtonColorText: '#1d1d1c',
  SecondaryButtonBgColor: '#e6e6e6',
  SecondaryButtonColorText: '#1d1d1c',
  border: '#e3f3a4',
  hoverColor: '#7c7c7e',
  iconColor: '#1d1d1c',

}

export const themeLight = {
  palette: {
    background: lightPalette.background,
    backgroundAlternative: lightPalette.backgroundAlternative,
    color: lightPalette.color,
    titleColor: lightPalette.titleColor,
    ImpButtonBgColor: lightPalette.ImpButtonBgColor,
    ImpButtonColorText: lightPalette.ImpButtonColorText,
    border: lightPalette.border,
    hoverColor: lightPalette.hoverColor,
    iconColor: lightPalette.iconColor,
    SecondaryButtonBgColor: lightPalette.SecondaryButtonBgColor,
    SecondaryButtonColorText: lightPalette.SecondaryButtonColorText,

  },
  mediaquery: {
    mobile: `@media (max-width: ${BreakPoints.tablet}px)`,
    tablet: `@media (min-width: ${BreakPoints.tablet}px) and (max-width: ${BreakPoints.desktop}px)`,
    desktop: `@media (min-width: ${BreakPoints.desktop}px)`,
  },

}

export const themeDark = {
  palette: {
    background: darkPalette.background,
    backgroundAlternative: darkPalette.backgroundAlternative,
    color: darkPalette.color,
    titleColor: darkPalette.titleColor,
    ImpButtonBgColor: darkPalette.ImpButtonBgColor,
    ImpButtonColorText: darkPalette.ImpButtonColorText,
    border: darkPalette.border,
    hoverColor: darkPalette.hoverColor,
    iconColor: darkPalette.iconColor,
    SecondaryButtonBgColor: darkPalette.SecondaryButtonBgColor,
    SecondaryButtonColorText: darkPalette.SecondaryButtonColorText,
  },
  mediaquery: {
    mobile: `@media (max-width: ${BreakPoints.tablet}px)`,
    tablet: `@media (min-width: ${BreakPoints.tablet}px) and (max-width: ${BreakPoints.desktop}px)`,
    desktop: `@media (min-width: ${BreakPoints.desktop}px)`,
  },

}