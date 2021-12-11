import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;