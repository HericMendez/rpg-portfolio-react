import ProgressBar from "components/Elements/ProgressBar";
import { useContext, useState } from "react";

import { ThemeContext } from "context/Themes";
import "./styles.css";
import SkillData from "./skillData";

import Text from "context/Languages/MultiLingualContent";
import useWindowDimensions from "Hooks/UseWindowDimensions";

const SkillCard = ({ skillID }) => {
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <div
      className="details-div rpgui-container framed-golden-2 "
      style={{
        position: "absolute",

        top: "2vh",
        right: width < 800 ? "10%" : "3vw",

        height: "77vh",
        overflowX: "hidden",
        overflowY: "scroll",
        width: width < 800 ? (width < 640 ? "80%" : "60%") : "33vw",

        fontFamily: theme === "ff-theme" ? "PressStart2P" : "DeterminationMono",
        fontSize: theme === "ff-theme" ? "1.5vh" : "2.5vh",
        color: "#fff",
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",


        // background: '#858587'//"#a8a9ad"
      }}
    >
      <div className="details-header rpgui-container framed-grey rpgui-pixelated" >
        <img
          className="header-skill-icon"
          src={SkillData[skillID - 1].icon}
          alt="Skill Icon"
        />
        <div className="header-text">
          <h3>
            <Text contentID={`skill_${skillID}_name`} />
          </h3>
        </div>
        <ProgressBar
          style={{ width: "30vw", fontSize: "1vh" }}
          label={`Exp. Level:`}
          color={SkillData[skillID - 1].barColor}
          fill={SkillData[skillID - 1].percent}
        />
      </div>

      {/*           <hr className="golden" /> */}

      <p className="details-text">
        <Text contentID={`skill_${skillID}_description`} />
      </p>
    </div>
  );
};

export default SkillCard;
