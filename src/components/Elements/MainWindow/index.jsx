import React, { useState, useContext } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "components/Pages/Home";
import About from "components/Pages/About";
import Status from "components/Pages/Status";
import Quests from "components/Pages/Quests";
import Skills from "components/Pages/Skills";
import Contact from "components/Pages/Contact";

import HomeIcon from "../../../assets/images/icons/House_Red.png";
import IconBlack from "../../../assets/images/icons/Blank_Black.png";
import IconGreen from "../../../assets/images/icons/Blank_Green.png";
import IconLightBlue from "../../../assets/images/icons/Blank_LightBlue.png";
import IconPurple from "../../../assets/images/icons/Blank_Purple.png";
import IconYellow from "../../../assets/images/icons/Blank_Yellow.png";

import PTBR from '../../../Languages/pt-br.json'
import ENUS from '../../../Languages/en-us.json'
import { ThemeContext } from "Themes";


const MainWindow = () => {
  const [title, setTitle] = useState("Heric's Portfolio - Main Page");
  const [language, setLanguage] = useState('PT-BR')
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("lang: ",language)
  function handleClick(e) {
    const pageTitles = {
      home: "Heric's Portfolio - Main Page",
      skills: "Skills and Proficiency Levels",
      status: "My Professional Profile",
      quests: "Projects and Successful Jobs",
      contact: "Hire this Adventurer!",
      about: "About this Project",
    };
    if (e.target.id) {
      console.log(pageTitles[e.target.id]);
      setTitle(pageTitles[e.target.id]);
    }
  }

  const translate = (section, content) => {
    if(language=='PT-BR'){
      return PTBR[section][content];;
    }
    else{
      return ENUS[section][content];
    }

  };

  return (
    <Router>
      <div className="main-container">
        <div className="hide-mobile rpgui-container framed nav-window">
          <ul onClick={handleClick}>
            <li>
              <Link id="home" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link id="skills" to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link id="status" to="/status">
                Resumé
              </Link>
            </li>
            <li>
              <Link id="quests" to="/quests">
                Projects
              </Link>
            </li>
            <li>
              <Link id="contact" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link id="about" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="hide-mobile rpgui-container framed icon-window">
          <div>
            <label>Language:</label>
            <select onChange={(e)=> setLanguage(e.target.value)} className="rpgui-dropdown" style={{width: '100%'}}>
              <option  style={{ color: "#222", background: "#cccaba" }} value="PT-BR">Português</option>
              <option  style={{ color: "#222", background: "#cccaba" }} value="EN-US">English</option>
              ...
            </select>
          </div>
          <div>
            <label>Theme:</label>
            <select onChange={(e)=> toggleTheme(e.target.value)} className="rpgui-dropdown" style={{width: '100%'}}>
              <option style={{ color: "#222", background: "#cccaba" }}  value="ff-theme">Final Fantasy</option>
              <option  style={{ color: "#222", background: "#cccaba" }} value="undertale-theme">Undertale</option>
              ...
            </select>
          </div>
        </div>
        <div className="hide-mobile rpgui-container framed title-window center-text">
          <h1>{title}</h1>
        </div>

        <div className="rpgui-container framed content-window">
          <Routes>
            <Route path="/" element={<Home translate={translate}/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/status" element={<Status />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="rpgui-container framed nav-mobile">
          <Link className="nav-link" to="/">
            <img className="nav-icon" src={HomeIcon} alt="Home" />
            Home
          </Link>
          <Link className="nav-link" to="/skills">
            <img className="nav-icon" src={IconPurple} alt="Home" />
            Skills
          </Link>
          <Link className="nav-link" to="/status">
            <img className="nav-icon" src={IconLightBlue} alt="Home" />
            Status
          </Link>
          <Link className="nav-link" to="/quests">
            <img className="nav-icon" src={IconGreen} alt="Home" />
            Quests
          </Link>
          <Link className="nav-link" to="/contact">
            <img className="nav-icon" src={IconYellow} alt="Home" />
            Contact
          </Link>
          <Link className="nav-link" to="/about">
            <img className="nav-icon" src={IconBlack} alt="Home" />
            About
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default MainWindow;