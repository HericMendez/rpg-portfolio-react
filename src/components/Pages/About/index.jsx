import "./styles.css";
import Text from "../../../context/Languages/MultiLingualContent/";

const About = () => {
  return (
    <div className="resume-text about-container">
      <section className="avatar3-div"></section>
      <div className="about-content">
        <h1>
          <Text contentID="about_h1" />
        </h1>
        <br />
        <p>
          <Text contentID="about_p_1" />
        </p>
        <p>
          <Text contentID="about_p_2" />
        </p>
        <p>
          <Text contentID="about_p_3" />
        </p>

        <br />
        <h3>
          {" "}
          <Text contentID="about_h3" />
        </h3>
        <p>
          <Text contentID="about_p_4" />
        </p>

        <p>
          <Text contentID="about_p_5" />
        </p>
        <br />
        <h3>Links</h3>
        <p>
          <Text contentID="about_p_6" />
          <a href="https://github.com/HericMendez/rpg-portfolio-react">
            <Text contentID="about_a_1" />
          </a>
        </p>
        <p>
          <Text contentID="about_p_7" />
          <a href="https://ronenness.github.io/RPGUI/">
            <Text contentID="about_a_2" />
          </a>
        </p>
        <p>
          <a href="">
            <Text contentID="about_a_3" />
          </a>
          <Text contentID="about_p_8" />
        </p>
      </div>
    </div>
  );
};

export default About;
