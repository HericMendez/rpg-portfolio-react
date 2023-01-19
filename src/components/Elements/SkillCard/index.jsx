import ProgressBar from "components/Elements/ProgressBar";
import { useContext } from "react";

import { ThemeContext } from "context/Themes";
import "./styles.css";


import Text from "context/Languages/MultiLingualContent";
import useWindowDimensions from "Hooks/UseWindowDimensions";

const SkillCard = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();

  return (
    <div
    className="details-div rpgui-container framed-golden-2 "
    style={{
      position: "absolute",
      
      top: "5vh",
      right: width<800 ? "10%": "3vw",

      height: '80vh',
      overflowX: 'hidden',
      overflowY:"scroll",
      width: width<800 ? (width < 640 ? '80%':'60%'): '33vw',
   
      fontFamily: theme === "ff-theme" ? "PressStart2P" : "DeterminationMono",
      fontSize:theme === "ff-theme" ? '2vh': '3vh',
      color: "#fff",
      textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
      color: '#fff'

      // background: '#858587'//"#a8a9ad"
    }}
  >
    <div className="details-header rpgui-container framed-grey">
      <img
        className="header-skill-icon"
        src={props.skillIcon}
        alt="Skill Image"
      />
      <div className="header-text">
        <h4><Text contentID={`skill_${props.skillID}_name`}/></h4>
       
      </div>
      <ProgressBar
        style={{width: "30vw"}}
      label={`Exp. Level:`}
      color={<Text contentID={`skill_${props.skillID}_barcolor`}/>}
      fill={<Text contentID={`skill_${props.skillID}_percent`}/>}
    />
    </div>

    {/*           <hr className="golden" /> */}

    <p className="details-text"><Text contentID={`skill_${props.skillID}_description`}/></p>


  </div>
  )
}

export default SkillCard