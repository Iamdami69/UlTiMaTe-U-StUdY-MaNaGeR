//@ts-check
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { GlobalStyles } from "./GlobalStyles";
import { useAuth } from "./Hooks/useAuth/useAuth";
import { AppComponent } from "./AppStyles";
import { useTheme } from "./Hooks/useTheme/useTheme";
import { PageWarpper } from "./Components/PageWarpper/PageWarpper";
import "./App.css";
export default function App() {
  const { authIsReady } = useAuth();
  const { theme } = useTheme();
  const disableContext = (/** @type {{ preventDefault: () => void; }} */ e) => {
    e.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <AppComponent onContextMenu={disableContext}> */}
      <PageWarpper className={undefined}>
        {authIsReady && <AppRoutes />}
        {!authIsReady && <h1>Loading......</h1>}
      </PageWarpper>
      {/* </AppComponent> */}
    </ThemeProvider>
  );
}
