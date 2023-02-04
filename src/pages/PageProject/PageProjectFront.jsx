/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import NavButton from '../../components/NavButton/NavButton';
import './PageProject.css';

function PageProjectFront({
  name,
  srcLink,
  srcGithub,
  srcImage,
  description,
  tecs,
}) {
  return (
    <div className="projeto-main">
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
      <div className="contentProject">
        <div className="mainProject">
          <h1>{name}</h1>
          <div className="links">
            <a
              className="visite"
              href={srcLink}
              target="_blank"
              rel="noreferrer"
            >
              Visite
            </a>
            <a
              className="github"
              href={srcGithub}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className="imgProject">
            <img src={srcImage} alt="" />
          </div>
        </div>
        <div className="description">
          <h2>Sobre o projeto</h2>
          <p>{description}</p>
        </div>
        <div className="tecs">
          <h2>Tecnologias Usadas</h2>
          <ul>
            {tecs.map((tec) => (
              <i>{tec}</i>
            ))}
          </ul>
        </div>
        <div className="acesse">
          <h2>Acesse Aqui</h2>
          <a href={srcLink} target="_blanck">
            {srcLink}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageProjectFront;
