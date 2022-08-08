import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --black:hsl(213, 8%, 23%);
    --blue: hsl(213, 80%, 31%);
    --gray: hsl(208, 56%, 95%);
    --gray-dark: hsl(210, 27%, 85%);
    --gray-light: hsl(208, 52%, 94%);
    --gray-medium: hsl(204, 33%, 84%);
    --green: hsl(150, 77%, 55%);
    --orange: hsl(28, 77%, 55%);
    --red: hsl(2, 77%, 55%);
    --white: hsl(255, 100%, 100%);
    --yellow: hsl(53, 95%, 51%);
    --font-size: 16px;
  }

  * {
    box-sizing: border-box;
    outline: 0;
  }

  body {
    display: flex;
    align-items: center;
    flex-flow: column;
    padding: 2rem 0;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(135deg, var(--gray-light) 20%, var(--gray) 70%);
    color: var(--black);
    font-family: "Alumni Sans", sans-serif;
    font-size: var(--font-size);

    @media (min-width: 400px) {
      justify-content: center;
    }
  }
`;

export default GlobalStyle;
