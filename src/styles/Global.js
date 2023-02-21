import { createGlobalStyle } from "styled-components";

import { devices } from "./deviceWidth";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    color:#EFF1ED;
}

html{
    font-size: 7px;
      @media ${devices.tablet} {
    font-size: 10px;
  }
}
body{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2rem;
    line-height: 1;
}
ol, ul {
    list-style: none outside none;
}
input,textarea, select, option {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #303036;
    font-size: 1.6rem;
}

`;
