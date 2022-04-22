//@ts-check
import { useEffect } from "react";
// @ts-ignore
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { GlobalStyles } from "./GlobalStyles";
import { useAuth } from "./Hooks/useAuth/useAuth";
import { AppComponent } from "./AppStyles";
import { useTheme } from "./Hooks/useTheme/useTheme";

import "./App.css";
export default function App() {
  const { authIsReady } = useAuth();
  const { theme } = useTheme();
  const disableContext = (/** @type {{ preventDefault: () => void; }} */ e) => {
    e.preventDefault();
  };
  // useEffect(() => {
  //   const unSub = document.addEventListener("keydown", (event) => {
  //     if (event.code === "KeyI" && event.ctrlKey && event.shiftKey) {
  //       event.preventDefault();
  //     }
  //   });
  //   return unSub;
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppComponent onContextMenu={disableContext}>
        {authIsReady && <AppRoutes />}
        {!authIsReady && <h1>Loading......</h1>}
      </AppComponent>
    </ThemeProvider>
  );
}
