import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
outline:none;
border:none;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
}
*::-webkit-scrollbar {
  display: none;
}
*:not(html, body, div#root) {
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), height 0.2s ease;
}

img{
  pointer-events:none;
}
.hasFluidFont{
  font-size: clamp(1.5rem, 8vw - 2rem, 3rem);
}
.touchableOpacity:active{
  filter: opacity(0%);
}
 .hasCursorPointer {
  cursor: pointer;
}
.hasShadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.hasShadowTwo {
  box-shadow: 0 2px 6px rgb(0 0 0 / 30%);
}

@media only screen and (max-width: 650px) {
  .wontShowOnMobile {
    display: none;
  }
}

@media only screen and (min-width: 650px) and (max-width: 768px) {
  .wontShowOnTablet {
    display: none;
  }
}

@media only screen and (min-width: 769px) {
  .wontShowOnDesktop {
    display: none;
  }
}
`;
