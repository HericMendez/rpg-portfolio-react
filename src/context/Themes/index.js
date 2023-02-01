import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as ff-theme
    localStorage.setItem("theme", "ff-theme");
    return "ff-theme";
  } else {
    return theme;
  }
};

const ThemeChanger = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  function toggleTheme(theme) {
    setTheme((theme) => (theme === "ff-theme" ? "undertale-theme" : "ff-theme"));

    console.log(theme);
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
      
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeChanger };
