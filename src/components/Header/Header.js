import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import "./Header.css";

export const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
 
  return (
    <header className="header">
      <span className="header__logo">ThemeProvider</span>
      <button className="button header__theme-button" onClick={changeTheme}>
        Theme
      </button>
   

    </header>
  );
};