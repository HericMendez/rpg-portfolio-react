import React from "react";
import Flappy from "../../../assets/images/project-screenshots/flappy.png";
import "./styles.css";
const Quests = () => {
  return (
    <div className="quests-container">
      <div className="left-side">
        <div className="rpgui-container framed-grey project-frame">
          <div className="image-div">
            <img className="project-img" src={Flappy} />
          </div>
        </div>
        <div className="projects-list">
          <select
            onClick={(e) => console.log(e.target.value)}
            class="rpgui-list-imp "
            size="6"
          >
            <option className="select-text" value="option1">
              Flappyvania
            </option>
            <option className="select-text" value="option2">
              option2
            </option>
            <option className="select-text" value="option3">
              option3
            </option>
            <option className="select-text" value="option4">
              option4
            </option>
            <option className="select-text" value="option5">
              option5{" "}
            </option>
            <option className="select-text" value="option6">
              option6
            </option>
            <option className="select-text" value="option7">
              option7
            </option>
            <option className="select-text" value="option8">
              option8
            </option>
          </select>
        </div>
      </div>

      <div
        style={{
          width: "35vw",
        }}
      >
        <div>
          <h1>FlappyVania</h1>
          <h3>Jogo HTML - Projeto Pessoal</h3>

          <p
            style={{
              lineHeight: 1.5,
              fontSize: "2vh",
            }}
          >
            Clone do jogo Flappy Bird, feito utilizando HTML Canvas e
            Javascript, com a temática da franquia Castlevania. A tela é
            responsiva em ambientes desktop e mobile. Eu sempre qus fazer um
            jogo, e este é meu primeiro (e até agora único) projeto na área de
            desenvolvimento de games. Fiz a partir de um tutorial de Flappy Bird
            utilizando HTML Canvas. É um dos projetos que mais me dão orgulho!
          </p>

          <hr className="golden" />

          <div>
            <h4>Tech i used in this project:</h4>
            <p>&nbsp;→ HTML (Canvas)</p>
            <p>&nbsp;→ CSS</p>
            <p>&nbsp;→ Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
