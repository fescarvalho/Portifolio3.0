/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import './Projetos.css';
import NavButton from '../../components/NavButton/NavButton';
import ProjectComponent from '../../components/Project/ProjectComponent';

function Projetos() {
  return (
    <>
      <NavButton />
      <div className="content">
        <div className="page-description">
          <h2>Portifolio</h2>
          <p>
            Aqui estão alguns dos meus projetos, desenvolvidos com tecnologias
            para desenvolvimento Web, como, JavaScript, ReactJs, Typescript,
            SASS, NodeJs, entre outras.
          </p>
        </div>
        <div className="project-main">
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
          <ProjectComponent />
        </div>
      </div>
    </>
  );
}

export default Projetos;
