import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyle;
