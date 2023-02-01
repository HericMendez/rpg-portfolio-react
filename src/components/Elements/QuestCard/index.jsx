import { useContext } from "react";
import "./styles.css";
import questData from "./questData";
import Text from "context/Languages/MultiLingualContent";
import HandCursor from "../../../assets/rpgui/img/theme-images/hand_cursor.png";
import HeartCursor from "../../../assets/rpgui/img/theme-images/heart_cursor.png";
import { ThemeContext } from "context/Themes";
import useWindowDimensions from "Hooks/UseWindowDimensions";




const QuestCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  console.log(questData[props.projectID - 1]);
  const ChangeThemeIcon = () =>
    theme === "ff-theme" ? HandCursor : HeartCursor;
  return (
    <div
      className="rpgui-container framed  resume-text"
      style={{
        position: "absolute",

        top: "2vh",
        right: width < 1000 ? "10%" : "3vw",

        height: "80vh",
        overflowX: "hidden",
        overflowY: "scroll",

        fontFamily: theme === "ff-theme" ? "PressStart2P" : "DeterminationMono",
        fontSize: theme === "ff-theme" ? "2vh" : "3vh",
        color: "#fff",
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",


        width: width < 1000 ? (width < 640 ? "90%" : "60%") : "37vw",
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
            <div className="rpgui-container framed-grey">
              <img style={{width: '100%'}} src={questData[props.projectID - 1].image} alt="" />
            </div>
        <p
          style={{
            lineHeight: 1.5,
            fontSize: "2vh",
          }}
        >
         <hr className="golden" />
         <br />
          <Text
            contentID={`project_${
              props.projectID ? props.projectID : "1"
            }_description`}
          />
        </p>
        <hr className="golden" />
        <br />
        <div className="project-links">
          <h4>Links:</h4>
          <div  style={{visibility: questData[props.projectID - 1].demo? 'visible': 'hidden'}}>
            <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
            &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href={questData[props.projectID - 1].demo}
            >
              Demonstration
            </a>
          </div>
          <br />
          <div  style={{visibility: questData[props.projectID - 1].git? 'visible': 'hidden'}}>
            <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
            &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href={questData[props.projectID - 1].git}
             
            >
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
