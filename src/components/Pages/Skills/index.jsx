import { useState, useEffect } from "react";
import ProgressBar from "components/Elements/ProgressBar";

import "./styles.css";

import IconHtml from "../../../assets/images/icons/html.png";
import IconCSS from "../../../assets/images/icons/css.png";
import IconJS from "../../../assets/images/icons/javascript.png";
import IconTS from "../../../assets/images/icons/typescript.png";
import IconReact from "../../../assets/images/icons/react.png";
import IconReactNative from "../../../assets/images/icons/react-native.png";
import IconNode from "../../../assets/images/icons/node.png";
import IconNpm from "../../../assets/images/icons/npm.png";
import IconBootstrap from "../../../assets/images/icons/bootstrap.png";
import IconTailwind from "../../../assets/images/icons/tailwind.png";
import IconNMysql from "../../../assets/images/icons/mysql.png";
import IconGit from "../../../assets/images/icons/git.png";
import IconScrum from "../../../assets/images/icons/agile.png";
import IconSwagger from "../../../assets/images/icons/swagger.png";
import IconPSGimp from "../../../assets/images/icons/ps-gimp.png";
import IconFigma from "../../../assets/images/icons/figma.png";
import IconHD from "../../../assets/images/icons/hd.png";
import IconPepakura from "../../../assets/images/icons/pepakura.png";
import Text from "context/Languages/MultiLingualContent";

const Skills = ({ translate }) => {

  const [skill, setSkill] = useState(translate("Skills", "0"));
  const [skillIcon, setSkillIcon] = useState(IconHtml);

  const icons = [
    IconHtml, IconCSS, IconJS, IconReact,
    IconReactNative, IconNode,IconNpm, 
    IconBootstrap, IconTailwind, IconNMysql,
    IconGit, IconScrum, IconSwagger, IconPSGimp,
    IconFigma, IconTS,IconPepakura, IconHD, 
  ];
  function handleClick(e) {

    if (e.target.id) {

      setSkill(() => translate("Skills", e.target.id - 1));
      setSkillIcon(() => icons[e.target.id - 1]);
    }
    return e.target.id -1
  }

  




  return (
    <div className="scrollable">
      <div className="skills-container">
        <div
          className=" rpgui-container framed skills-div"
 
        >
          <h1 className="grid-title">Main Skills</h1>

          <div onClick={handleClick} className="skills-grid">
            <div className="skill-icon">
              <img id="1" src={IconHtml} alt="Html" />
            </div>

            <div className="skill-icon">
              <img id="2" src={IconCSS} alt="CSS" />
            </div>

            <div className="skill-icon">
              <img id="3" src={IconJS} alt="JS" />
            </div>

            <div className="skill-icon">
              <img id="4" src={IconReact} alt="React" />
            </div>

            <div className="skill-icon">
              <img id="5" src={IconReactNative} alt="React-Native" />
            </div>

            <div className="skill-icon">
              <img id="6" src={IconNode} alt="Node" />
            </div>

            <div className="skill-icon">
              <img id="7" src={IconNpm} alt="NPM" />
            </div>

            <div className="skill-icon">
              <img id="8" src={IconBootstrap} alt="Bootstrap" />
            </div>

            <div className="skill-icon">
              <img id="9" src={IconTailwind} alt="Tailwind" />
            </div>

            <div className="skill-icon">
              <img id="10" src={IconNMysql} alt="Mysql" />
            </div>

            <div className="skill-icon">
              <img id="11" src={IconGit} alt="Git" />
            </div>

            <div className="skill-icon">
              <img id="12" src={IconScrum} alt="Scrum" />
            </div>

            <div className="skill-icon">
              <img id="13" src={IconSwagger} alt="Swagger" />
            </div>

            <div className="skill-icon">
              <img id="14" src={IconPSGimp} alt="PS" />
            </div>

            <div className="skill-icon">
              <img id="15" src={IconFigma} alt="Figma" />
            </div>

            <div className="skill-icon">
              <img id="16" src={IconTS} alt="TS" />
            </div>

            <div className="skill-icon">
              <img id="18" src={IconHD} alt="HD" />
            </div>

            <div className="skill-icon">
              <img id="17" src={IconPepakura} alt="Pepakura" />
            </div>
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
          <div className="details-header rpgui-container framed-grey">
            <img
              className="header-skill-icon"
              src={skillIcon}
              alt={skill.name}
            ></img>
            <div className="header-text">
              <h1><Text contentID="hello"/></h1>

              <h4>{skill.meta}</h4>
            </div>
          </div>

          {/*           <hr className="golden" /> */}

          <p className="details-text">{skill.description}</p>

          <ProgressBar
            label={`Exp. Level: ${skill.level}`}
            color={skill.barColor}
            fill={skill.percent}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
