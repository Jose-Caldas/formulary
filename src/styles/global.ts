import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;      
}

html {
    font-size: 62.5%;
  }

body {
   background-color: #fff;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};

    h1 {
        font-size: ${(props) => props.theme.font.sizes.xxlarge};
    }
}
`;
