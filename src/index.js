import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/rpgui/rpgui.scss";
import App from "./App";

import { ThemeChanger } from "context/Themes";
import "./context/Themes/variables.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <ThemeChanger>
      <App />
    </ThemeChanger>

);
