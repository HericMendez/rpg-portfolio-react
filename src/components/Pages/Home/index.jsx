import ProgressBar from "components/Elements/ProgressBar";
import { useContext } from "react";
import "./styles.css";

import Portrait from "../../../assets/images/avatar/avatar_portrait.png";
import IconJS from "../../../assets/images/icons/javascript.png";
import IconReact from "../../../assets/images/icons/react.png";
import IconHtml from "../../../assets/images/icons/html.png";
import IconCss from "../../../assets/images/icons/css.png";
import useWindowDimensions from "Hooks/UseWindowDimensions";
import Text from "../../../context/Languages/MultiLingualContent/";
import HandCursor from "../../../assets/rpgui/img/theme-images/hand_cursor.png";
import HeartCursor from "../../../assets/rpgui/img/theme-images/heart_cursor.png";
import Coffee from "../../../assets/images/icons/coffee.png";

import { ThemeContext } from "context/Themes";
import { GiCoffeeCup } from 'react-icons/gi';
const Home = () => {
  const { height, width } = useWindowDimensions();
  console.log(width, height);
  const { theme } = useContext(ThemeContext);

  const ChangeThemeIcon = () =>
    theme === "ff-theme" ? HandCursor : HeartCursor;
  if (width > 850) {
    document.title = "My Portfolio"
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
                  <Text contentID="home_h4_1" />
                </h4>
                <ul>
                  <li className="text-class">
                    <img src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_1" />
                  </li>
                  <li className="text-class">
                    <img  src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_2" />
                  </li>
                  <li className="text-class">
                    <img  src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_3" />
                  </li>
                  <li className="text-class">
                    <img  src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_4" />
                  </li>
                  
                  
                </ul>
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
                <ProgressBar
                  label={<Text contentID="home_label_1" />}
                  color="red"
                  fill="80%"
                />
                <ProgressBar
                  label={<Text contentID="home_label_2" />}
                  color="blue"
                  fill="70%"
                />
                <ProgressBar
                  label={<Text contentID="home_label_3" />}
                  color="green"
                  fill="30%"
                />
              </div>
              <div style={{ width: "45%" }}>
                <div>
                  <p className="center-text">
                    <Text contentID="home_h4_2" />
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
          <img className="avatar-img" alt="Avatar"></img>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="home-container">
          <div className="panel-div ">
            <div className="panel-window scrollable">
              <h1 className="center-text">Heric Mendes</h1>
              <h4 style={{ paddingBottom: "2vh" }} className=" center-text">
                <Text contentID="home_h4_1" />
              </h4>

              <div className="profile-div ">
                <div className="portrait-div">
                  <div className="rpgui-container framed-grey portrait-frame">
                    <img
                      className="avatar-portrait"
                      alt="Avatar Portrait"
                    ></img>
                  </div>
                  <div className="progress-bars">
                    <ProgressBar
                      label={<Text contentID="home_label_1" />}
                      color="red"
                      fill="80%"
                    />
                    <ProgressBar
                      label={<Text contentID="home_label_2" />}
                      color="blue"
                      fill="70%"
                    />
                    <ProgressBar
                      label={<Text contentID="home_label_3" />}
                      color="green"
                      fill="30%"
                    />
                  </div>
                </div>
              </div>
              <hr className="golden" />
              <div className="profile-description">
                <ul>
                  <li className="text-class">
                    <img  src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_1" />
                  </li>
                  <li className="text-class">
                    <img  src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_2" />
                  </li>
                  <li className="text-class">
                    <img  src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_3" />
                  </li>
                  <li className="text-class">
                    <img  src={ChangeThemeIcon()} alt="" />
                    
                    <Text contentID="home_p_4" />
                  </li>
                  
                </ul>
              </div>
              <br></br>

              <div>
                <div>
                  <h4 className="center-text">
                    - <Text contentID="home_h4_2" />
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
