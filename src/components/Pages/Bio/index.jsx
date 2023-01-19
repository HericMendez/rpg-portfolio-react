
import useWindowDimensions from "Hooks/UseWindowDimensions";


import "./styles.css";

const Bio = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="status-container">
      <section className="avatar2-div"></section>
      <section className={width>800? "resume-container rpgui-container framed": "resume-container"}>
        <div className="resume-text ">
          <h1>
            Olá, meu nome é Héric, e este é meu portfolio de desenvolvedor
            Front-end.{" "}
          </h1>
          <br />
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas e Dev Freelancer,
            apaixonado por tudo que envolve tecnologia e design. Autodidata e de
            perfil criativo, possuo experiência como desenvolvedor Web e Mobile.
            Em meus conhecimentos destacam-se as tecnologias React, React Native
            e a criação de layouts responsivos.
          </p>
          <br />
          <h2>Emprego Atual</h2>
          <p>Desenvolvedor Remoto na Biotrônica</p>
          <br />
          <h2>Formação Profissional</h2>
          <p>
            <u>Tecnólogo em Análise e Desenvolvimento de Sistemas</u>
            <br />
            <span>
              Fatec Taquaritinga <br />
              Agosto/2022 - Atual (2º semestre)
            </span>
          </p>
          <p>
            <u>Técnico em Desenvolvimento de Sistemas</u>
            <br />{" "}
            <span>
              Etec Matão <br />
              Agosto/2019 - Dezembro/2020
            </span>
          </p>
          <p>
            <u>Administração de Empresas</u>
            <br />
            <span>
              Uniara
              <br />
              Janeiro/2014 - Dezembro/2017
            </span>
          </p>
          <br />
          <h2>Cursos e Certificados</h2>
          <p>
            <u>React com Typescript</u>
            <br />
            <span>Alura - 2022 (cursando atualmente)</span>
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
