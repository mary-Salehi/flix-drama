import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light' , 'dark')
    root.classList.add(theme)
  } , [theme])

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === 'undefined') {
    throw new Error ('ThemeContext was used outside of Provider')
  }
  return context
}