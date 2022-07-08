import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    background-color: #fafaf8;
    box-sizing: border-box;
}
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

a {
    text-decoration: none;
}
`;
