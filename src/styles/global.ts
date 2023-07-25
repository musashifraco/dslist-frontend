import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root {
    
    --gray-100: #FFFF;
    --gray-300: #C2CAE8;
    --gray-600: #8789C0;

    --blue-400-hover: #5DA5A9;
    --blue-400: #3DA5A9;
    --blue-600-hover: #5964AA;
    --blue-600: #2364AA;
    --blue-900: #111D4A;
}

html, body, #root {
    height: 100%;
    width: 100%;
}
`