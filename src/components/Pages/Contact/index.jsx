import "./styles.css";
import { useContext } from "react";
import IconLinkedin from "../../../assets/images/icons/linkedin.png";
import IconInstagram from "../../../assets/images/icons/instagram.png";
import IconGithub from "../../../assets/images/icons/github.png";
import IconResume from "../../../assets/images/icons/resume.png";
import IconSteam from "../../../assets/images/icons/steam.png";

import { ThemeContext } from "Themes";
const Contact = () => {


const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="contact-container scrollable">
      <div className="form-div">
        <form action="#">
          <label htmlFor="name">Seu nome:</label>
          <input name="name" type="text" placeholder="Nome" />
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" placeholder="aaa@gmail.com" />
          <label htmlFor="message">Sua mensagem:</label>
          <textarea name="message" placeholder="What's your quest, sir?" />
          <button style={{color: theme==="undertale-theme"?"#fff " : "#000"}} className="rpgui-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="social-links-div">
        <h1>Onde me encontrar</h1>

        <div className="social-link-container">
          <img src={IconLinkedin} alt="" />
          <div>

            <a href="https://www.linkedin.com/in/hericmendes/">https://www.linkedin.com/<br/>in/hericmendes/</a>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconGithub} alt="" />
          <div>

            <a href="https://github.com/HericMendez">https://github.com/<br/>HericMendez</a>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconInstagram} alt="" />
          <div>

            <a href="https://www.instagram.com/revimaxinga/">https://www.instagram.com/<br/>revimaxinga/</a>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconSteam} alt="" />
          <div>

            <a href="#">Username: Revimaxinga</a>
          </div>
        </div>


        <div className="social-link-container">
          <img src={IconResume} alt="" />
          <div>
            <a>Baixe meu currículo</a>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
