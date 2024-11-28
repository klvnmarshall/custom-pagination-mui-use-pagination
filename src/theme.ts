/**
 * @author Kelvin Kinyoro on 28/10/2024
 */

"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: false,
    light: true,
  },
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
});

export default theme;
