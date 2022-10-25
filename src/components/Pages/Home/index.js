import ProgressBar from "components/Elements/ProgressBar";
import React from "react";
import "./styles.css";
import Avatar from "../../../assets/images/avatar/avatar_half_res.png";
import Portrait from "../../../assets/images/avatar/avatar_portrait.png";
import IconJS from "../../../assets/images/original/javascript.png";
import IconNode from "../../../assets/images/original/node.png";
import IconReact from "../../../assets/images/original/react.png";



const Home = () => {
  return (
    <div className="home-container">
      
      <div className="panel-div ">
        <div className="hide-mobile panel-window scrollable">
          <div className="profile-div">
            <div className="portrait-div">
              <img
                className="avatar-portrait"
                src={Portrait}
                alt="Avatar Portrait"
              ></img>
            </div>
            <div className="profile-description">
              <p className="text-name">Heric Mendes</p>
              <p className="text-level">Level 31</p>
              <p className="text-class">Front-End Dev</p>
            </div>
            
          </div>

 
          <progressbar-div></progressbar-div>
          <ProgressBar label="Health: " color="red" fill="80%" />
          <ProgressBar label="Coding Exp:" color="blue" fill="70%" />
          <ProgressBar label="Hours of Sleep:" color="green" fill="20%" />
       
          <div>
            <h3 className="center-text">Main Skills</h3>
            <div className="skill-icons">
              <img className="main-skill-icon" src={IconJS} alt="Javascript" />
              <img className="main-skill-icon" src={IconNode} alt="NodeJS" />
              <img className="main-skill-icon" src={IconReact} alt="React" />
            </div>
          </div>
        </div>
      </div>
      <div className="hide-mobile avatar-div">
        <img className="avatar-img" src={Avatar} alt="Avatar"></img>
      </div>
    </div>
  );
};

export default Home;