import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "./Context/ThemeContext/ThemeContext";

import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
