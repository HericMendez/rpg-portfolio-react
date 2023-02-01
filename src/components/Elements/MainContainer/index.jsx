import React, { useState, useContext } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "components/Pages/Home";
import About from "components/Pages/About";
import Bio from "components/Pages/Bio";
import Quests from "components/Pages/Quests";
import Skills from "components/Pages/Skills";
import Contact from "components/Pages/Contact";

import {
  GiBehold,
  GiCycle,
  GiBrazilFlag,
  GiDrippingSword,
  GiHouse,
  GiScrollQuill,
  GiSkills,
  GiWantedReward,
  GiUsaFlag,
} from "react-icons/gi";

import NavButton from "../NavButton";
import HandCursor from "../../../assets/rpgui/img/theme-images/hand_cursor.png";
import HeartCursor from "../../../assets/rpgui/img/theme-images/heart_cursor.png";

import { ThemeContext } from "context/Themes";
import { LanguageContext } from "context/Languages/LanguageContext";
import Text from "../../../context/Languages/MultiLingualContent";
import Page404 from "components/Pages/Page404";

const MainContainer = () => {
  const [titleID, setTitleID] = useState('title_home');
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
  const navButtonStyle = {
    width: 70,
    height: 70,
    marginLeft: 5,
    marginRight: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 10,
    fontSize: 10,
  };
  console.log("aaaa", localStorage.language);
  return (
    <Router>
      <div className="main-container">
        <div className="hide-mobile rpgui-container framed nav-window">
          <ul onClick={handleClick}>
            <li className="nav-item">
              <Link id="title_home" to="/">
                <img src={ChangeThemeIcon()} alt="" />
                <Text contentID="nav_home" />
              </Link>
            </li>

            <li className="nav-item">
              <Link id="title_bio" to="/bio">
                <img src={ChangeThemeIcon()} alt="" />{" "}
                <Text contentID="nav_bio" />
              </Link>
            </li>

            <li className="nav-item">
              <Link id="title_skills" to="/skills">
                <img className="nav-cursor" src={ChangeThemeIcon()} alt="" />{" "}
                <Text contentID="nav_skills" />
              </Link>
            </li>

            <li className="nav-item">
              <Link id="title_quests" to="/quests">
                <img src={ChangeThemeIcon()} alt="" />{" "}
                <Text contentID="nav_quests" />
              </Link>
            </li>
            <li className="nav-item">
              <Link id="title_contact" to="/contact">
                <img src={ChangeThemeIcon()} alt="" />
                <Text contentID="nav_contact" />
              </Link>
            </li>
            <li className="nav-item">
              <Link id="title_about" to="/about">
                <img src={ChangeThemeIcon()} alt="" />{" "}
                <Text contentID="nav_about" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hide-mobile rpgui-container framed icon-window">
          <div>
            <button
              style={{
                fontSize: "2vh",
                width: "100%",
                color: theme === "undertale-theme" ? "#fff " : "#000",
              }}
              className="rpgui-button"
              type="submit"
              onClick={toggleTheme}
            >
              <Text contentID="nav_theme" />:
              <br />
              {theme === "ff-theme" ? "Final Fantasy" : "Undertale"}
            </button>

            <button
              style={{
                fontSize: "2vh",
                width: "100%",
                color: theme === "undertale-theme" ? "#fff " : "#000",
              }}
              className="rpgui-button"
              type="submit"
              onClick={toggleLanguage}
            >
              <Text contentID="nav_lang" />:
              <br />
              {language === "portuguese" ? "PT-BR" : "ENGLISH"}
            </button>
          </div>
        </div>
        <div className="hide-mobile rpgui-container framed title-window center-text">
          <h1>{<Text contentID={titleID} />}</h1>
        </div>

        <div className="rpgui-container framed content-window">
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="rpgui-container framed nav-mobile">
          <Link to="/">
            <NavButton style={navButtonStyle}>
              <GiHouse size={36} />
              HOME
            </NavButton>
          </Link>
          <Link to="/skills">
            <NavButton style={navButtonStyle}>
              <GiDrippingSword size={36} /> <Text contentID="nav_skills" />
            </NavButton>
          </Link>
          <Link to="/bio">
            <NavButton style={navButtonStyle}>
              <GiSkills size={36} />
              <Text contentID="nav_bio" />
            </NavButton>
          </Link>
          <Link to="/quests">
            <NavButton style={navButtonStyle}>
              <GiWantedReward size={36} />
              <Text contentID="nav_quests" />
            </NavButton>
          </Link>
          <Link to="/contact">
            <NavButton style={navButtonStyle}>
              <GiScrollQuill size={36} />
              <Text contentID="nav_contact" />
            </NavButton>
          </Link>
          <Link to="/about">
            <NavButton style={navButtonStyle}>
              <GiBehold size={36} />
              <Text contentID="nav_about" />
            </NavButton>
          </Link>

          <div onClick={toggleTheme}>
            <NavButton style={navButtonStyle}>
              <GiCycle size={36} />
              <Text contentID="nav_theme" />
            </NavButton>
          </div>

          <div onClick={toggleLanguage}>
            <NavButton style={navButtonStyle}>
              {language === "portuguese" ? (
                <GiBrazilFlag size={36} />
              ) : (
                <GiUsaFlag size={40} />
              )}
              <Text contentID="nav_lang" />
            </NavButton>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainContainer;
