import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Importação direta do Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

  :root {
    --bg-dark: #120202;
    --text-white: #FFFFFF;
    --secondary-pink: #F7C5C5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-dark);
    color: var(--text-white);
    -webkit-font-smoothing: antialiased;
  }
`;