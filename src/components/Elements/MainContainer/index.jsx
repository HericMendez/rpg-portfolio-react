import React, { useState, useContext } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "components/Pages/Home";
import About from "components/Pages/About";
import Bio from "components/Pages/Bio";
import Quests from "components/Pages/Quests";
import Skills from "components/Pages/Skills";
import Contact from "components/Pages/Contact";

import HomeIcon from "../../../assets/images/icons/House_Red.png";
import IconBlack from "../../../assets/images/icons/Blank_Black.png";
import IconGreen from "../../../assets/images/icons/Blank_Green.png";
import IconLightBlue from "../../../assets/images/icons/Blank_LightBlue.png";
import IconPurple from "../../../assets/images/icons/Blank_Purple.png";
import IconYellow from "../../../assets/images/icons/Blank_Yellow.png";
import IconRed from "../../../assets/images/icons/Blank_Red.png";

import HandCursor from "../../../assets/rpgui/img/theme-images/hand_cursor.png";
import HeartCursor from "../../../assets/rpgui/img/theme-images/heart_cursor.png";

import { ThemeContext } from "context/Themes";
import { LanguageContext } from "context/Languages/LanguageContext";
import Text from "../../../context/Languages/MultiLingualContent";


const MainContainer = () => {
  const [titleID, setTitleID] = useState("Heric's Portfolio - Main Page");
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const { language, toggleLanguage } = useContext(LanguageContext);

  console.log("title:", titleID);
  const ChangeThemeIcon = () =>
    theme === "ff-theme" ? HandCursor : HeartCursor;


  function handleClick(e) {
    if (e.target.id) {
      console.log(e.target.id);
      setTitleID(() => e.target.id);
    }
  }

  console.log("aaaa", localStorage.language);
  return (
    <Router>
      <div className="main-container">
        <div className="hide-mobile rpgui-container framed nav-window">
          <ul onClick={handleClick}>
            <li className="nav-item">
              <Link id="title_home" to="/">
                <img src={ChangeThemeIcon()} alt="" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link id="title_bio" to="/bio">
                <img src={ChangeThemeIcon()} alt="" /> Bio
              </Link>
            </li>

            <li className="nav-item">
              <Link id="title_skills" to="/skills">
                <img className="nav-cursor" src={ChangeThemeIcon()} alt="" />{" "}
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link id="title_quests" to="/quests">
                <img src={ChangeThemeIcon()} alt="" /> Quests
              </Link>
            </li>
            <li className="nav-item">
              <Link id="title_contact" to="/contact">
                <img src={ChangeThemeIcon()} alt="" />
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link id="title_about" to="/about">
                <img src={ChangeThemeIcon()} alt="" /> About
              </Link>
            </li>
          </ul>
        </div>
        <div className="hide-mobile rpgui-container framed icon-window">
          <div>
            <button
              style={{
                fontSize: "2.3vh",
                width: "100%",
                color: theme === "undertale-theme" ? "#fff " : "#000",
              }}
              className="rpgui-button"
              type="submit"
              onClick={toggleTheme}
            >
              Theme: 

              {theme === "ff-theme" ? "Final Fantasy" : "Undertale"}
            </button>

            <button
              style={{
                fontSize: "2.3vh",
                width: "100%",
                color: theme === "undertale-theme" ? "#fff " : "#000",
              }}
              className="rpgui-button"
              type="submit"
              onClick={toggleLanguage}
            >
              Language:
              <br />
              {language}
            </button>
          </div>
        </div>
        <div className="hide-mobile rpgui-container framed title-window center-text">
          <h1>{<Text contentID={titleID} />}</h1>
        </div>

        <div className="rpgui-container framed content-window">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/quests" element={<Quests />} />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="rpgui-container framed nav-mobile">
          <Link className="nav-link" to="/">
            <img className="nav-icon" src={HomeIcon} alt="Home" />

          </Link>
          <Link className="nav-link" to="/skills">
            <img className="nav-icon" src={IconPurple} alt="Home" />

          </Link>
          <Link className="nav-link" to="/bio">
            <img className="nav-icon" src={IconLightBlue} alt="Home" />

          </Link>
          <Link className="nav-link" to="/quests">
            <img className="nav-icon" src={IconGreen} alt="Home" />

          </Link>
          <Link className="nav-link" to="/contact">
            <img className="nav-icon" src={IconYellow} alt="Home" />

          </Link>
          <Link className="nav-link" to="/about">
            <img className="nav-icon" src={IconRed} alt="Home" />

          </Link>


          <Link
              style={{

                backgroundColor: 'transparent',
                padding: 0,
                margin: 0,
                border: 'none',
              }}
     
    
              onClick={toggleTheme}
            >
              <img className="nav-icon" src={IconBlack} alt="Home" />
            </Link>

            <Link
              style={{

                backgroundColor: 'transparent',
                padding: 0,
                margin: 0,
                border: 'none',
              }}
     
    
              onClick={toggleLanguage}
            >
              <img className="nav-icon" src={IconBlack} alt="Home" />
            </Link>

        </div>
      </div>
    </Router>
  );
};

export default MainContainer;
