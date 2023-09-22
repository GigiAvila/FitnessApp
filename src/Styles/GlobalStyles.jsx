import { Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          "@import":
            'url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inconsolata:wght@200&family=Nunito&family=Shadows+Into+Light&display=swap");',

          "*": {
            fontFamily: "Bebas Neue, sans-serif",
            boxSizing: "border-box",
            margin: 0,
          },
          "html, body": {
            padding: 0,
            margin: 0,
            color: theme.palette.color,
            backgroundColor: theme.palette.background,
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          }

        },

      ]}
    />
  );
};

export default GlobalStyles;
