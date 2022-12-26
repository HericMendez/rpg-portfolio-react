import "./styles.css";

const About = () => {
  return (
    <div className="resume-text about-container">
      <div className="about-content">
        <h1>Sobre este projeto</h1>
        <br />
        <p>
          Esta é uma página de portfolio profissional criada usando React e a
          biblioteca CSS RPGUI, com um design inspirado em jogos de RPG
          clássicos dos anos 90 e 2000.
        </p>
        <p>
          Este projeto foi feito para ser minha principal página de portfolio (a
          segunda que fiz), com o propósito de ter algo que demonstrasse minhas
          habilidades e meus trabalhos como programador e desenvolvedor, e
          também como um desafio pra mim mesmo.
        </p>
        <p>
          Em meu primeiro portfolio, que fiz baseado em um tutorial do Youtube
          de React e Tailwind, eu programei e implementei muita coisa legal e
          tive que aprender bastante coisa nova pra que pudesse concluí-lo
          (muito do código original foi aproveitando neste segundo projeto).
          Porém, em certo ponto, eu estava limitado ao template original, e eu
          tinha ideias que queria tirar do papel. Então decidi começar algo do
          zero, criando algo mais original, que tivesse mais a ver com minha
          personalidade e gostos pessoais.
        </p>

        <br />
        <h3>Agradecimentos</h3>
        <p>
          Este projeto não seria possível sem a Biblioteca CSS RPGUI, do dev
          RonenNess. Se um dia ler isso, saiba que seu trabalho é incrível,
          muito obrigado!
        </p>

        <p>
          Ah, e um agradecimento especial à minha amiga JinfSZ pela belíssima
          arte da página inicial. Mais do trabalho dela aqui: /*(link dela
          aqui)*/
        </p>
        <br />
        <h3>Links</h3>
        <p>
          Se você gostou desse projeto ou dos outros listados neste portfolio,
          deixa uma estrelinha no meu repositório: /*(link do meu github aqui)*/
        </p>

        <p>
          A magnífica biblioteca CSS que usei como base neste projeto: /*(link
          da lib aqui)*/
        </p>
      </div>
    </div>
  );
};

export default About;
