import React, { useState } from "react";
import Flappy from "../../../assets/images/project-screenshots/flappy.png";
import "./styles.css";

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


const Quests = ({translate}) => {
  const icons = [
    IconHtml, IconCSS, IconJS, IconReact,
    IconReactNative, IconNode,IconNpm, 
    IconBootstrap, IconTailwind, IconNMysql,
    IconGit, IconScrum, IconSwagger, IconPSGimp,
    IconFigma, IconTS,IconPepakura, IconHD, 
  ];
  const [project, setProject] = useState("")
  function handleClick(e) {

    if (e.target.id) {  
      
     // setProject(() => translate("Quests", e.target.id - 1));
      console.log(translate("Quests", e.target.id - 1))

    }

  }

  


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
            onClick={handleClick}
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
            Escrit??rio Advocacia - Home Page
            </option>
            <option id='5' className="select-text" value="cryptoapp">
            CryptoApp
            </option>
            <option id='6' className="select-text" value="portfolio_1.0">
            Portfolio React Tailwind
            </option>
            <option id='7' className="select-text" value="biotronica">
            Projetos da Biotr??nica
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

        className='rpgui-container framed resume-text right-side'
      >
        <div>
          <h1>{project.name}</h1>
          <h3>Jogo HTML - Projeto Pessoal</h3>

          <p
            style={{
              lineHeight: 1.5,
              fontSize: "2vh",
            }}
          >
            Clone do jogo Flappy Bird, feito utilizando HTML Canvas e
            Javascript, com a tem??tica da franquia Castlevania. A tela ??
            responsiva em ambientes desktop e mobile. Eu sempre qus fazer um
            jogo, e este ?? meu primeiro (e at?? agora ??nico) projeto na ??rea de
            desenvolvimento de games. Fiz a partir de um tutorial de Flappy Bird
            utilizando HTML Canvas. ?? um dos projetos que mais me d??o orgulho!
          </p>

          <hr className="golden" />

          <div>
            <h4>Tech i used in this project:</h4>
            <p>&nbsp;??? HTML (Canvas)</p>
            <p>&nbsp;??? CSS</p>
            <p>&nbsp;??? Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
