import { useState, useContext } from "react";
import "./styles.css";
import Text from "../../../context/Languages/MultiLingualContent";
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
import QuestCard from "components/Elements/QuestCard";
import HandCursor from "../../../assets/rpgui/img/theme-images/hand_cursor.png";
import HeartCursor from "../../../assets/rpgui/img/theme-images/heart_cursor.png";
import { ThemeContext } from "context/Themes";
import Modal from "@mui/material/Modal";

import useWindowDimensions from "Hooks/UseWindowDimensions";

const Quests = () => {
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const ChangeThemeIcon = () =>
    theme === "ff-theme" ? HandCursor : HeartCursor;
    const [isOpen, setIsOpen] = useState(false);

  const [projectID, setProjectID] = useState(1);
  function handleClick(e) {
    if (e.target.id) {
      setProjectID(() => e.target.id);
      setIsOpen(()=> true)
    }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="quests-container">
      <div className="left-side">
        <div className="projects-list scrollable">
          <h1>My Project List:</h1>
          <p>(click to view)</p>
          <ul onClick={handleClick} size="6">
            <li className="select-text" value="flappyvania">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="1">
                <Text contentID="project_1_name" />
              </p>
            </li>
            <li className="select-text" value="meme-generator">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="2">
                <Text contentID="project_2_name" />
              </p>
            </li>
            <li x className="select-text" value="acdcit">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="3">
                <Text contentID="project_3_name" />
              </p>
            </li>
            <li  className="select-text" value="advogada">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="4">
                {" "}
                <Text contentID="project_4_name" />
              </p>{" "}
            </li>
            <li  className="select-text" value="cryptoapp">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="5">
                <Text contentID="project_5_name" />
              </p>
            </li>
            <li  className="select-text" value="portfolio_1.0">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="6">
                <Text contentID="project_6_name" />
              </p>
            </li>
            <li className="select-text" value="biotronica">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="7">
                <Text contentID="project_7_name" />
              </p>
            </li>
            <li className="select-text" value="polar_mobile">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="8" >
                <Text contentID="project_8_name" />
              </p>
            </li>
            <li  className="select-text" value="polar_web">
              <img style={{ width: 24 }} src={ChangeThemeIcon()} alt="" />
              &nbsp;
              <p id="9">
                <Text contentID="project_9_name" />
              </p>
            </li>
          </ul>
        </div>
      </div>
      {width > 800 ? (
      <QuestCard projectID={projectID} />

        ) : (
          <Modal
          open={isOpen}
          onClose={()=>setIsOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        > 
                  <QuestCard style={{backgroundColor: "#000"}} projectID={projectID} />
  
                  </Modal>
        )}
    </div>
  );
};

export default Quests;
