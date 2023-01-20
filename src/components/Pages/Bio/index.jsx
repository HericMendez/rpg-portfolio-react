
import useWindowDimensions from "Hooks/UseWindowDimensions";
import Text from "../../../context/Languages/MultiLingualContent";


import "./styles.css";

const Bio = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="status-container">
      <section className="avatar2-div"></section>
      <section className={width>800? "resume-container rpgui-container framed": "resume-container"}>
        <div className="resume-text ">
          <h1>
          <Text contentID="bio_h1" />
          </h1>
          <br />
          <p>
          <Text contentID="bio_p_1" />
          </p>
          <br />
          <h2><Text contentID="bio_h2_1" /></h2>
          <p><Text contentID="bio_p_2" /></p>
          <br />
          <h2><Text contentID="bio_h2_2" /></h2>
          <p>
            <u><Text contentID="course_1_name"/></u>
            <br />
            <span>
              Fatec Taquaritinga <br />
              <Text contentID="course_1_cycle"/>
            </span>
          </p>
          <p>
            <u><Text contentID="course_2_name"/></u>
            <br />{" "}
            <span>
              Etec Matão <br />
              <Text contentID="course_2_name"/>
            </span>
          </p>
          <p>
            <u><Text contentID="course_3_name"/></u>
            <br />
            <span>
              Uniara
              <br />
              <Text contentID="course_3_cycle"/>
            </span>
          </p>
          <br />
          <h2><Text contentID="bio_h2_3"/></h2>
          <p>
          <u><Text contentID="course_4_name"/></u>
            <br />
            <span><Text contentID="course_4_cycle"/></span>
          </p>
          <p>
            <u>Scrum Foundation Professional Certificate</u>
            <br />
            <span> Certiprof - 2021</span>
          </p>
          <p>
            <u>Javascript Algorithms and Data Structures </u>
            <br />
            <span>FreeCodeCamp - 2021</span>
          </p>

          <p>
            <u>Responsive Web Designs</u>
            <br />
            <span>
              FreeCodeCamp - 2021 <br />
            </span>
          </p>

          <br />
        </div>
      </section>
    </div>
  );
};

export default Bio;
