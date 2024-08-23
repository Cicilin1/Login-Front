import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        font-family: ${({ theme }) => theme.fonts.body};
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle;