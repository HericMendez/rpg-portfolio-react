import "./styles.css";
import IconWhatsapp from "../../../assets/images/icons/whatsapp.png";
import IconLinkedin from "../../../assets/images/icons/linkedin.png";
import IconInstagram from "../../../assets/images/icons/instagram.png";
import IconGithub from "../../../assets/images/icons/github.png";
import IconResume from "../../../assets/images/icons/resume.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-div">
        <form action="#">
          <label htmlFor="name">Seu nome:</label>
          <input name="name" type="text" placeholder="Nome" />
          <label htmlFor="name">Email:</label>
          <input name="name" type="email" placeholder="aaa@gmail.com" />
          <label htmlFor="message">Sua mensagem:</label>
          <textarea name="message" placeholder="Me contrata aí kkk" />
          <button className="rpgui-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="social-link-div">
        <h1>Onde me encontrar</h1>

        <div className="social-link-container">
          <img src={IconLinkedin} alt="" />
          <div>
            <h3>Linkedin</h3>
            <p>[Link here]</p>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconGithub} alt="" />
          <div>
            <h3>Github</h3>
            <p>[Link here]</p>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconInstagram} alt="" />
          <div>
            <h3>Instagram</h3>
            <p>[Link here]</p>
          </div>
        </div>

        <div className="social-link-container">
          <img src={IconWhatsapp} alt="" />
          <div>
            <h3>Whatsapp</h3>
            <p>[Link here]</p>
          </div>
        </div>
        <div className="social-link-container">
          <img src={IconResume} alt="" />
          <div>
            <h3>Baixe meu currículo:</h3>
            <p>[Link here]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
