/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import './Projetos.css';
import NavButton from '../../components/NavButton/NavButton';
import ProjectComponent from '../../components/Project/ProjectComponent';

function Projetos() {
  return (
    <>
      <NavButton />
      <div className="content">
        <div className="ribon">
          <a
            href="https://github.com/fescarvalho"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="page-description">
          <h2>Portifólio</h2>
          <p>
            Aqui estão alguns dos meus projetos, desenvolvidos com tecnologias
            para desenvolvimento Web, como, JavaScript, ReactJs, Typescript,
            SASS, NodeJs, entre outras.
            <p>
              Você pode conferir outros projetos no meu Github, clicando no
              botão azul a direita.
            </p>
          </p>
        </div>
        <div className="project-main">
          <ProjectComponent name="Nome do Projeto" />
          <ProjectComponent name="Nome do Projeto" />
          <ProjectComponent name="Nome do Projeto" />
          <ProjectComponent name="Nome do Projeto" />
          <ProjectComponent name="Nome do Projeto" />
          <ProjectComponent name="Nome do Projeto" />
        </div>
      </div>
    </>
  );
}

export default Projetos;
