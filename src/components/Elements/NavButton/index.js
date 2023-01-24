import {useContext} from "react";
import "./styles.css";
import { ThemeContext } from "context/Themes";


const NavButton = (props) => {
  const {theme} = useContext(ThemeContext)
  return (
    <button
      style={{
        width: 60,
        height: 60,
        color: theme === "undertale-theme" ? "#fff " : "#000",
        ...props.style,
      }}
      className="rpgui-button theme-button"
    >
      {props.children}
    </button>
  );
};

export default NavButton;
