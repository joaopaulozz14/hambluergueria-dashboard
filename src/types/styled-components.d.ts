import theme from "../assets/styles/theme";

export type Theme = typeof theme;

//O nosso tema extende o tema padrão do styled-components;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
