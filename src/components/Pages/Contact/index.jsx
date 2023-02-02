import "./styles.css";
import { useContext } from "react";
import IconLinkedin from "../../../assets/images/icons/linkedin.png";
import IconInstagram from "../../../assets/images/icons/instagram.png";
import IconGithub from "../../../assets/images/icons/github.png";
import IconResume from "../../../assets/images/icons/resume.png";
import IconSteam from "../../../assets/images/icons/steam.png";
import Text from "../../../context/Languages/MultiLingualContent/";

import { ThemeContext } from "context/Themes";
import { LanguageContext } from "context/Languages/LanguageContext";
const Contact = () => {
const lang = useContext(LanguageContext)
console.log(lang.language)
const { theme } = useContext(ThemeContext);
document.title = "Contact"
  return (
    <div className="contact-container scrollable">
      <div className="form-div">
      <form action="https://getform.io/f/06a7b1a6-7841-4abe-9072-4ea50308c71d" method="POST">
          <label htmlFor="name"><Text contentID="form_label_name" /></label>
          <input name="name" required={true} type="text" placeholder="Nome" />
          <label htmlFor="email">Email:</label>
          <input name="email" required={true} type="email" placeholder="aaa@gmail.com" />
          <label htmlFor="message"><Text contentID="form_label_message" /></label>
          <textarea name="message" placeholder={lang.language==='english'? "Seeing this beautiful portfolio fills you with determination.": "Ver esse portfólio incrível te enche de determinação."} />
          <button style={{color: theme==="undertale-theme"?"#fff " : "#000"}} className="rpgui-button" type="submit">
          <Text contentID="form_submit" />
          </button>
        </form>
      </div>
      <div className="social-links-div">
        <h1><Text contentID="form_h1" /></h1>
        <br/>
        <div className="social-link-container">
          <img src={IconLinkedin} alt="" />
          <div>

            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hericmendes/">Linkedin: Héric Mendes</a>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconGithub} alt="" />
          <div>

            <a target="_blank" rel="noreferrer" href="https://github.com/HericMendez">Github: HericMendez</a>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconInstagram} alt="" />
          <div>

            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/revimaxinga/">Instagram: @revimaxinga</a>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconSteam} alt="" />
          <div>

            <a target="_blank" rel="noreferrer" href="https://steamcommunity.com/id/revimaxinga/">Steam: Revimaxinga</a>
          </div>
        </div>


        <div className="social-link-container">
          <img  src={IconResume} alt="" />
          <div>
            <a href="/src/assets/pdf/resume.pdf" download="resume"><Text contentID="form_resume_link" /></a>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
