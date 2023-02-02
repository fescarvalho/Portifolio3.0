/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import './Projetos.css';
import NavButton from '../../components/NavButton/NavButton';
import ProjectComponent from '../../components/Project/ProjectComponent';
import projetos from '../../mockProject';

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
          {projetos.map((projeto) => (
            <ProjectComponent
              key={projeto.id}
              name={projeto.name}
              src={projeto.src}
              linkImage1={projeto.linkImage1}
              linkImage2={projeto.linkImage2}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projetos;
