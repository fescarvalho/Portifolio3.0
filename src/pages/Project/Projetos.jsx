/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { motion } from 'framer-motion';
import './Projetos.css';
import { NavLink } from 'react-router-dom';
import NavButton from '../../components/NavButton/NavButton';
import ProjectComponent from '../../components/Project/ProjectComponent';
import { projetosFront, projetosBack } from '../../mockProject';

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
          <motion.h2
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 2 }}
          >
            Portifólio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Aqui estão alguns dos meus projetos, desenvolvidos com tecnologias
            para desenvolvimento Web, como, JavaScript, ReactJs, Typescript,
            SASS, NodeJs, entre outras.
            <p>
              Você pode conferir outros projetos no meu Github, clicando no
              botão azul a direita.
            </p>
          </motion.p>
        </div>
        <div className="linksStacks">
          <motion.div
            initial={{ translateX: -500 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <NavLink to="/project/frontend">FrontEnd</NavLink>
          </motion.div>
          <motion.div
            initial={{ translateX: 500 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <NavLink to="/project/backend">Backend</NavLink>
          </motion.div>
        </div>
        <div className="project-main">
          <ul>
            {projetosFront.map((projeto) => (
              <motion.li
                key={projeto.id}
                inital={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectComponent
                  key={projeto.id}
                  name={projeto.name}
                  src={projeto.src}
                  linkImage1={projeto.linkImage1}
                  linkImage2={projeto.linkImage2}
                />
              </motion.li>
            ))}
            {projetosBack.map((projeto) => (
              <motion.li
                key={projeto.id}
                inital={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectComponent
                  key={projeto.id}
                  name={projeto.name}
                  src={projeto.src}
                  linkImage1={projeto.linkImage1}
                  linkImage2={projeto.linkImage2}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Projetos;
