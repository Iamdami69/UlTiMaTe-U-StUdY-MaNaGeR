//@ts-check
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage/useLocalStorage";

export const ThemeContext = createContext({ toggleTheme: null, theme: null });

export function ThemeContextProvider({ children }) {
  const { getStorage, setStorage } = useLocalStorage("themeState");
  const [isDarkMode, setIsDarkMode] = useState(
    getStorage("themeState") ?? true
  );

  const theme = {
    background: isDarkMode ? "#212529" : "#dbe5f1",
    color: isDarkMode ? "#f8f9fa" : "#212529",
    colorTwo: isDarkMode ? "#adb5bd" : "#868e96",
    colorThree: isDarkMode ? "#868e96" : "#495057",
    depthColor: isDarkMode ? "#343a40" : "#ffffff",
    depthColorTwo: isDarkMode ? "#2e3439" : "#f2f3f1",
    depthColorThree: isDarkMode ? "#353535" : "#f2f3f1",
    brandColor: isDarkMode ? "#5f3dc4" : "#9775fa",
    brandColorTwo: isDarkMode ? "#ff922b" : "#ff922b",
    brandColorThree: isDarkMode ? "#69db7c" : "#51cf66"
  };

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    // @ts-ignore
    meta.content = theme.background;
  }, [theme.background]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setStorage(!isDarkMode);
  };
  return (
    <ThemeContext.Provider
      value={{
        // @ts-ignore
        isDarkMode,
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
