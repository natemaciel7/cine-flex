import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Sarala:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;

  }

  body {
    background-color: #212226;
    color: #FFFFFF;
  }

  h2 {
    font-family: Sarala;
  }
`;

export default GlobalStyle;
