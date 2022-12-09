import ProgressBar from "components/Elements/ProgressBar";
import React from "react";
import "./styles.css";
import Avatar from "../../../assets/images/avatar/avatar_half_res.png";
import Portrait from "../../../assets/images/avatar/avatar_portrait.png";
import IconJS from "../../../assets/images/original/javascript.png";
import IconNode from "../../../assets/images/original/node.png";
import IconReact from "../../../assets/images/original/react.png";
import IconHtml from "../../../assets/images/original/html.png";
import IconCss from "../../../assets/images/original/css.png";




const Home = () => {
  return (
    <div className="home-container">
      
      <div className="panel-div ">
        <div className="hide-mobile panel-window rpgui-container rpgui-draggable framed scrollable">
          <div className="profile-div">
            <div className="portrait-div">
              <img
                className="avatar-portrait"
                src={Portrait}
                alt="Avatar Portrait"
              ></img>
            </div>
            <div className="profile-description">
              <h1  className="center-text">Heric Mendes</h1>
              <h3 style={{paddingBottom: '2vh'}} className=" center-text">Level 31 Developer</h3>
              
            
              <p className="text-class">- Front-End/Mobile Freelancer</p>
              <p className="text-class">- Intern Dev at Biotronica</p>
              <p className="text-class">- Student at Fatec Taquaritinga</p>
              <p className="text-class">- Currently learning Typescript</p>
              
    

            </div>
            
          </div>
         

<div style={{display: 'flex', flexDirection: 'row, ', paddingTop: '5vh', justifyContent: 'space-around'}}>

<div style={{width: '45%'}}>

   <ProgressBar label="Health: " color="red" fill="80%" />
<ProgressBar label="Coding Exp:" color="blue" fill="70%" />
<ProgressBar label="Hours of Sleep:" color="green" fill="20%" />

</div>
<div style={{width: '45%', paddingTop: '1.5vh'}}>
   
<div>
            <h4 className="center-text" style={{fontSize: '1.5vh'}}>Main Skills</h4>
            <div className="skill-icons">
              <img className="main-skill-icon" src={IconHtml} alt="HTML" />
              <img className="main-skill-icon" src={IconCss} alt="NodeJS" />

            </div>
            <br />
            <div className="skill-icons">
              <img className="main-skill-icon" src={IconJS} alt="Javascript" />
              <img className="main-skill-icon" src={IconReact} alt="NodeJS" />

            </div>

          </div> 
</div>

</div>


          <br/><br/>
        </div>
      </div>
      <div className="hide-mobile avatar-div">
        <img className="avatar-img" src={Avatar} alt="Avatar"></img>
      </div>
    </div>
  );
};

export default Home;