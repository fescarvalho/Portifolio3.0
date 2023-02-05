import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import NavButton from '../../components/NavButton/NavButton';
import '../Project/Projetos.css';
import ProjectComponent from '../../components/Project/ProjectComponent';
import { projetosBack } from '../../mockProject';

function ProjetosBack() {
  return (
    <>
      <div className="header-page">
        <NavLink to="/projetos">
          <ul className="buttonLink">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </ul>
        </NavLink>
        <NavButton />
      </div>
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
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Projetos Back End
          </motion.h2>
          <p>
            Meus projetos, focados em desenvolvimento BackEnd
            <p>
              Você pode conferir outros projetos no meu Github, clicando no
              botão azul a direita.
            </p>
          </p>
        </div>
        <div className="linksStacks">
          <NavLink to="/project/frontend">FrontEnd</NavLink>
          <NavLink to="/project/backend">Backend</NavLink>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="project-main">
            <ul>
              {projetosBack.map((projeto) => (
                <li>
                  <ProjectComponent
                    key={projeto.id}
                    name={projeto.name}
                    src={projeto.src}
                    linkImage1={projeto.linkImage1}
                    linkImage2={projeto.linkImage2}
                  />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjetosBack;
