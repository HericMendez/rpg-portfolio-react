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

  return (
    <div
      className="rpgui-container framed  resume-text rpgui-pixelated"
      style={{
        position: "absolute",

        top: "2vh",

        right: width < 1000 ? "2.5%" : "2vw",
        marginLeft: 100,


        height: "80vh",
        overflowX: "hidden",
        overflowY: "scroll",

        fontFamily: theme === "ff-theme" ? "PressStart2P" : "DeterminationMono",
        fontSize: theme === "ff-theme" ? "2vh" : "3vh",
        color: "#fff",
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",


        width: width < 1000 ? (width < 640 ? "95%" : "60%") : "37vw",
        background:
          theme === "ff-theme"
            ? "linear-gradient(to bottom right, #466bfa, #00002b) repeat repeat"
            : "#000",
      }}
    >
      <div>
        <h1 style={{fontSize: theme === "ff-theme" ? "2.5vh" : "5vh",}}>
          <Text
            contentID={`project_${
              props.projectID ? props.projectID : "1"
            }_name`}
          />
        </h1>
        <h3 style={{fontSize: theme === "ff-theme" ? "1.5vh" : "2vh", color: '#ccc'}}>
          <Text
            contentID={`project_${
              props.projectID ? props.projectID : "1"
            }_type`}
          />
        </h3>
            <div className="rpgui-container framed-grey">
              <img style={{width: '100%'}} src={questData[props.projectID - 1].image} alt="" />
              <hr />

              <div className="project-links">
              <a
              target="_blank"
              rel="noreferrer"
              href={questData[props.projectID - 1].demo}
            >
               <button disabled={!questData[props.projectID - 1].demo? true:false}>DEMO</button>
            </a>
              
            <a
              target="_blank"
              rel="noreferrer"
              href={questData[props.projectID - 1].git}
           
            >
              <button disabled={!questData[props.projectID - 1].git? true:false}>CODE</button>
            </a>
              </div>
            
            </div>
        <p
          style={{
            lineHeight: 1.5,
            fontSize: "2vh",
          }}
        >
         <hr className="golden" />
  
          <Text
            contentID={`project_${
              props.projectID ? props.projectID : "1"
            }_description`}
          />
        </p>
       
      
      </div>
    </div>
  );
};

export default QuestCard;
