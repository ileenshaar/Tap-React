import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const themeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("colorMode") || "light"
  );

  const toggleTheme = () => {
    let colorMode = theme === "light" ? "dark" : "light";
    setTheme(colorMode);
  };

  useEffect(() => {
    localStorage.setItem("colorMode", theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export const useThemeContext = () => useContext(themeContext);
