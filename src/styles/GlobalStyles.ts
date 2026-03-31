import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

  :root {
    --bg-dark: #120202;
    --bg-deep: #08060d;
    --text-white: #FFFFFF;
    --text-dark: #000000;
    --secondary-pink: #F7C5C5;
    --primary-red: #8B0000;

    --font-primary: 'Roboto', sans-serif;
    --font-secondary: 'Antonio', sans-serif;
  }

  body {
    font-family: var(--font-primary);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--bg-dark);
    color: var(--text-white);
    font-family: var(--font-primary);
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;