import React from "react";
import { useState } from "react";
import IconBlack from "../../../assets/images/icons/Blank_Black.png";
import IconGreen from "../../../assets/images/icons/Blank_Green.png";
import IconLightBlue from "../../../assets/images/icons/Blank_LightBlue.png";
import IconPurple from "../../../assets/images/icons/Blank_Purple.png";
import IconYellow from "../../../assets/images/icons/Blank_Yellow.png";
import IconRed from "../../../assets/images/icons/Blank_Red.png";

import "./styles.css";

const Skills = () => {
const [skill, setSkill] = useState("")
const tech = ['html', 'css', 'javascript', 'react', 'react-native', 'node', 'tailwind', 'scrum', 'git']
  function handleClick(e){

     if(e.target.id) setSkill(tech[e.target.id-1])
    
  }


  return (
    <div className="container scrollable">
      <div className="skills-div">
      <h1>Main Skills</h1>
      <div onClick={handleClick} className="skills-grid">
    

                <img id="1" className="skill-icon" src={IconRed} alt="Javascript" />
                <img id="2" className="skill-icon" src={IconRed} alt="NodeJS" />
                <img id="3" className="skill-icon" src={IconRed} alt="React" />


                <img id="4" className="skill-icon" src={IconRed} alt="Javascript" />
                <img id="5" className="skill-icon" src={IconRed} alt="NodeJS" />
                <img id="6" className="skill-icon" src={IconRed} alt="React" />


                <img id="7"  className="skill-icon" src={IconRed}  alt="Javascript" />
                <img id="8"  className="skill-icon" src={IconRed} alt="NodeJS" />
                <img id="9"  className="skill-icon" src={IconRed} alt="React" />
                

            </div>
            
      </div>
      <div className="details-div">
        <div className="rpgui-container framed details-box">
          <h1>{skill}</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
