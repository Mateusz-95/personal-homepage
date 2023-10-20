import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
  ::after,
  ::before {
    box-sizing: inherit;
  }

body {
  width: 1368px;
  max-width: 95%;
  margin-top: 115px;
  font-family: Inter;
  background-color: ${({ theme }) => theme.colors.body}
}
`;
