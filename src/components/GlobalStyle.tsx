import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyle;
