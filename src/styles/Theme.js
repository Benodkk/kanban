import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    font: "#EFF1ED",
    secondFont: "#9ca3af",
    main: "#303036",
    second: "#545F66",
    error: "rgb(220, 38, 38, 0.9)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
