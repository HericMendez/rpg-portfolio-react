import { useState, useContext } from "react";
import "./styles.css";
import Text from "../../../context/Languages/MultiLingualContent";
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
      {width > 1000 ? (
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
