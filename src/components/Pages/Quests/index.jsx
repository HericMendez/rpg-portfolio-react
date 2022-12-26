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
        <div className="projects-list scrollable">
          <select
            onClick={(e) => console.log(e.target.id)}
            class="rpgui-list-imp "
            size="6"
          >
            <option id='1' className="select-text" value="flappyvania">
              Flappyvania
            </option>
            <option id='2'  className="select-text" value="meme-generator">
            Movie Meme Generator
            </option>
            <option id='3'  className="select-text" value="acdcit">
            Empresa ACDCIT - Home Page
            </option>
            <option id="4" className="select-text" value="advogada">
            Escritório Advocacia - Home Page
            </option>
            <option id='5' className="select-text" value="cryptoapp">
            CryptoApp
            </option>
            <option id='6' className="select-text" value="portfolio_1.0">
            Portfolio React Tailwind
            </option>
            <option id='7' className="select-text" value="biotronica">
            Projetos da Biotrônica
            </option>
            <option id='8' className="select-text" value="polar_mobile">
            App Polar Sapiens
            </option>
            <option id='9' className="select-text" value="polar_web">
            Polar Sapiens Webpage
            </option>
          </select>
        </div>
      </div>

      <div
        style={{
          width: "37vw",
          position:'absolute',
          right: '2vw',
          top: '2vh',
          height: '78vh'
        }}
        className='rpgui-container framed resume-text'
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
