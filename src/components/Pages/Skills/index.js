import React from "react";
import { useState } from "react";
import ProgressBar from "components/Elements/ProgressBar";
import HtmlSlotIcon from "../../../assets/images/icons/skill-slots/html-slot.png";
import CssSlotIcon from "../../../assets/images/icons/skill-slots/css-slot.png";
import JsSlotIcon from "../../../assets/images/icons/skill-slots/js-slot.png";
import ReactSlotIcon from "../../../assets/images/icons/skill-slots/react-slot.png";
import ReactNativeSlotIcon from "../../../assets/images/icons/skill-slots/rn-slot.png";
import NodeSlotIcon from "../../../assets/images/icons/skill-slots/node-slot.png";
import TailwindSlotIcon from "../../../assets/images/icons/skill-slots/tailwind-slot.png";
import GithubSlotIcon from "../../../assets/images/icons/skill-slots/github-slot.png";
import AgileSlotIcon from "../../../assets/images/icons/skill-slots/agile-slot.png";
import MysqlSlotIcon from "../../../assets/images/icons/skill-slots/mysql-slot.png";
import "./styles.css";
import SkillData from "./skillData";

import { Container } from "UI";
const Skills = () => {
  const [skill, setSkill] = useState(SkillData[0]);
  function handleClick(e) {
    if (e.target.id) setSkill(SkillData[e.target.id - 1]);
  }

  return (
    <div className="scrollble">
      <div className="skills-container">
        <div className="skills-div">
          <h1 className="grid-title">Main Skills</h1>
          <div onClick={handleClick} className="skills-grid">
            <img id="1" className="skill-icon" src={HtmlSlotIcon} alt="HTML" />
            <img id="2" className="skill-icon" src={CssSlotIcon} alt="CSS" />
            <img id="3" className="skill-icon" src={JsSlotIcon} alt="JS" />

            <img
              id="4"
              className="skill-icon"
              src={ReactSlotIcon}
              alt="React"
            />
            <img
              id="5"
              className="skill-icon"
              src={ReactNativeSlotIcon}
              alt="React"
            />
            <img id="6" className="skill-icon" src={NodeSlotIcon} alt="Node" />
            <img
              id="7"
              className="skill-icon"
              src={TailwindSlotIcon}
              alt="React"
            />

            <img
              id="8"
              className="skill-icon"
              src={MysqlSlotIcon}
              alt="Javascript"
            />
            <img
              id="9"
              className="skill-icon"
              src={AgileSlotIcon}
              alt="NodeJS"
            />
          </div>
        </div>
        <div className="details-div">
          <div className="details-header">
            <img
              className="header-skill-icon"
              src={skill.image}
              alt={skill.name}
            ></img>
            <div className="header-text">
              <h1>{skill.name}</h1>
              <br />
              <h4>{skill.meta}</h4>
            </div>
          </div>
          <hr className="golden" />
          <h1>Descripton</h1>
          <p className="details-text">{skill.description}</p>
          <br />
          <ProgressBar
            label={`Skill level: ${skill.level}`}
            color={skill.barColor}
            fill={skill.percent}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
