import React from "react";
import { useState } from "react";
import ProgressBar from "components/Elements/ProgressBar";

import EmptySlot from '../../../assets/images/icons/empty-slot-ff.png'
import "./styles.css";
import SkillData from "./skillData";
import IconHtml from "../../../assets/images/icons/html.png";
const Skills = () => {
  const [skill, setSkill] = useState(SkillData[0]);
  function handleClick(e) {
    if (e.target.id) setSkill(SkillData[e.target.id - 1]);
  }

  return (
    <div className="scrollable">
      <div className="skills-container">
        <div
          className=" rpgui-container framed "
          style={{
            position: "absolute",
            top: "4vh",
            left: "1vw",
            height: "fit-content",
    
          }}
        >
          <h1 className="grid-title">Main Skills</h1>
          <div onClick={handleClick} className="skills-grid">
            <img id="1" className="skill-icon" src={EmptySlot} alt="HTML" />
            <img id="2" className="skill-icon" src={EmptySlot} alt="CSS" />
            <img id="3" className="skill-icon" src={EmptySlot} alt="JS" />

            <img
              id="4"
              className="skill-icon"
              src={EmptySlot}
              alt="React"
            />
            <div
              id="5"
              className="skill-icon"
   
            >
                      <img
              id="7"

              src={IconHtml}
              alt="React"
            />

            </div>
            <img id="6" className="skill-icon" src={EmptySlot} alt="Node" />
            <img
              id="7"
              className="skill-icon"
              src={EmptySlot}
              alt="React"
            />

            <img
              id="8"
              className="skill-icon"
              src={EmptySlot}
              alt="Javascript"
            />
            <img
              id="9"
              className="skill-icon"
              src={EmptySlot}
              alt="NodeJS"
            />

            <img
              id="5"
              className="skill-icon"
              src={EmptySlot}
              alt="React"
            />
            <img id="6" className="skill-icon" src={EmptySlot} alt="Node" />
            <img
              id="7"
              className="skill-icon"
              src={EmptySlot}
              alt="React"
            />

            <img
              id="8"
              className="skill-icon"
              src={EmptySlot}
              alt="Javascript"
            />
            <img
              id="9"
              className="skill-icon"
              src={EmptySlot}
              alt="NodeJS"
            />
            <img
              id="7"
              className="skill-icon"
              src={EmptySlot}
              alt="React"
            />

            <img
              id="8"
              className="skill-icon"
              src={EmptySlot}
              alt="Javascript"
            />
            <img
              id="9"
              className="skill-icon"
              src={EmptySlot}
              alt="NodeJS"
            />
          </div>
        </div>
        <div
          className="details-div rpgui-container framed-golden-2  "
          style={{
            position: "absolute",
            top: "3vh",
            right: "3vw",
            height: "75vh",

         // background: '#858587'//"#a8a9ad"

            
          }}
        >
          <div className="details-header rpgui-container framed-grey"
          
          >
          <img
              className="header-skill-icon"
              src={skill.image}
              alt={skill.name}
            ></img>
                    <div className="header-text">
              <h1>{skill.name}</h1>
  
              <h4>{skill.meta}</h4>
            </div>
          </div>
   

   
{/*           <hr className="golden" /> */}

          <p className="details-text">{skill.description}</p>
               
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
