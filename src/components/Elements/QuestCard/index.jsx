import { useContext } from "react";

import Text from "context/Languages/MultiLingualContent";
import IconHtml from "../../../assets/images/icons/html.png";
import IconCSS from "../../../assets/images/icons/css.png";
import IconJS from "../../../assets/images/icons/javascript.png";
import { ThemeContext } from "context/Themes";
import useWindowDimensions from "Hooks/UseWindowDimensions";

const QuestCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <div
      className="rpgui-container framed resume-text right-side "
      style={{
   
        position: "absolute",
      
        top: "5vh",
        right: width<800 ? "10%": "3vw",
  
        height: '80vh',
        overflowX: 'hidden',
        overflowY:"scroll",

     
        fontFamily: theme === "ff-theme" ? "PressStart2P" : "DeterminationMono",
        fontSize:theme === "ff-theme" ? '2vh': '3vh',
        color: "#fff",
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
        color: '#fff',
 
        width: width<800 ? (width < 640 ? '80%':'60%'):  '37vw',
        background:
        theme === "ff-theme"
          ? "linear-gradient(to bottom right, #466bfa, #00002b) repeat repeat"
          : "#000",
      }}
    >
      <div>
        <h1>
          <Text
            contentID={`project_${
              props.projectID ? props.projectID : "1"
            }_name`}
          />
        </h1>
        <h3>
          <Text
            contentID={`project_${
              props.projectID ? props.projectID : "1"
            }_type`}
          />
        </h3>

        <p
          style={{
            lineHeight: 1.5,
            fontSize: "2vh",
          }}
        >
          <Text
            contentID={`project_${
              props.projectID ? props.projectID : "1"
            }_description`}
          />
        </p>
        <hr className="golden" />
        <div>
          <h4>Links:</h4>
          <a href="https://hericmendez.github.io/Flappyvania-Canvas/">
            Demonstration
          </a>
          <br />
          <a href="#">Github Repository</a>
        </div>
       
      </div>
    </div>
  );
};

export default QuestCard;
