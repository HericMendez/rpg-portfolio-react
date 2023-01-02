import ProgressBar from "components/Elements/ProgressBar";
import React from "react";
import "./styles.css";

import Portrait from "../../../assets/images/avatar/avatar_portrait.png";
import IconJS from "../../../assets/images/icons/javascript.png";
import IconReact from "../../../assets/images/icons/react.png";
import IconHtml from "../../../assets/images/icons/html.png";
import IconCss from "../../../assets/images/icons/css.png";
import useWindowDimensions from "Hooks/UseWindowDimensions";

const Home = ({ translate }) => {
  const { height, width } = useWindowDimensions();
  console.log(width, height);
  console.log(translate("Home", "p1"))
  if (width > 850) {
    return (
      <div className="home-container">
        <div className="panel-div ">
          <div className="hide-mobile panel-window rpgui-container framed scrollable">
            <div className="profile-div ">
              <div className="portrait-div">
                <img
                  className="avatar-portrait"
                  src={Portrait}
                  alt="Avatar Portrait"
                ></img>
              </div>
              <div className="profile-description">
                <h1 className="center-text">Heric Mendes</h1>
                <h4 className=" center-text">
                  {translate("Home", "h3_1")}
                </h4>

                <p className="text-class">- {translate("Home", "p1")}</p>
                <p className="text-class">- {translate("Home", "p2")}</p>
                <p className="text-class">- {translate("Home", "p3")}</p>
                <p className="text-class">- {translate("Home", "p4")}</p>
              
              </div>

            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row, ",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "55%" }}>
              <ProgressBar label={translate("Home", "label_1")} color="red" fill="80%" />
              <ProgressBar label={translate("Home", "label_2")} color="blue" fill="70%" />
              <ProgressBar label={translate("Home", "label_3")} color="green" fill="30%" />
              </div>
              <div style={{ width: "45%"}}>
                <div>
                  <p className="center-text">
                  {translate("Home", "h4_1")}
                  </p>
                  <div className="skill-icons">
                    <img
                      className="main-skill-icon"
                      src={IconHtml}
                      alt="HTML"
                    />
                    <img
                      className="main-skill-icon"
                      src={IconCss}
                      alt="NodeJS"
                    />
                  </div>
                  <br />
                  <div className="skill-icons">
                    <img
                      className="main-skill-icon"
                      src={IconJS}
                      alt="Javascript"
                    />
                    <img
                      className="main-skill-icon"
                      src={IconReact}
                      alt="NodeJS"
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
        </div>
        <div className="hide-mobile avatar-div">
          <img className="avatar-img"  alt="Avatar"></img>
        </div>
      </div>
    );



  } 
  else {
    return (
      <div>
        <div className="home-container">
          <div className="panel-div ">
            <div className="panel-window scrollable">
            <h1 className="center-text">Heric Mendes</h1>
                <h4 style={{ paddingBottom: "2vh" }} className=" center-text">
                {translate("Home", "h3_1")}
                </h4>

              <div className="profile-div ">
                
                <div className="portrait-div">
                  <img
                    className="avatar-portrait"
    
                    alt="Avatar Portrait"
                  ></img>
                              <div className="progress-bars">
              <ProgressBar label={translate("Home", "label_1")} color="red" fill="80%" />
              <ProgressBar label={translate("Home", "label_2")} color="blue" fill="70%" />
              <ProgressBar label={translate("Home", "label_3")} color="green" fill="30%" />
             </div>
                </div>
                
              </div>
              <hr className="golden" />
              <div className="profile-description">
       
              <p className="text-class">- {translate("Home", "p1")}</p>
                <p className="text-class">- {translate("Home", "p2")}</p>
                <p className="text-class">- {translate("Home", "p3")}</p>
                <p className="text-class">- {translate("Home", "p4")}</p>
              </div>
              <br></br>
       
             <div>
                <div>
                  <h4 className="center-text">
                  {translate("Home", "h4_1")}
                  </h4>
                  <div className="skill-icons">
                    <img
                      className="main-skill-icon"
                      src={IconHtml}
                      alt="HTML"
                    />
                    <img
                      className="main-skill-icon"
                      src={IconCss}
                      alt="NodeJS"
                    />
      
                    <img
                      className="main-skill-icon"
                      src={IconJS}
                      alt="Javascript"
                    />
                    <img
                      className="main-skill-icon"
                      src={IconReact}
                      alt="NodeJS"
                    />
                  </div>
                </div>
              </div>
             <br></br>
             <br></br>
             <br></br>

            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
