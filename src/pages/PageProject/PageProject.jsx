/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import NavButton from '../../components/NavButton/NavButton';
import './PageProject.css';

function PageProject({
  name,
  srcLink,
  srcGithub,
  srcImage,
  description,
  tec1,
  tec2,
  tec3,
  tec4,
  tec5,
  tec6,
  tec7,
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
          <h1>{name}Projeto 1</h1>
          <div className="links">
            <a className="visite" href={srcLink}>
              Visite
            </a>
            <a className="github" href={srcGithub}>
              Github
            </a>
          </div>
          <div className="imgProject">
            <img src={srcImage} alt="" />
          </div>
        </div>
        <div className="description">
          <h2>Sobre o projeto</h2>
          <p>
            {description}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="tecs">
          <h2>Tecnologias Usadas</h2>
          <ul>
            <i>{tec1}JavaScript</i>
            <i>{tec2}JavaScript</i>
            <i>{tec3}JavaScript</i>
            <i>{tec4}JavaScript</i>
            <i>{tec5}JavaScript</i>
            <i>{tec6}JavaScript</i>
            <i>{tec7}JavaScript</i>
          </ul>
        </div>
        <div className="acesse">
          <h2>Acesse Aqui</h2>
          <a href={srcLink} target="_parent">
            {srcLink}
            https://edrodrigues.com.br/blog/20-incriveis-botoes-animados-de-css-puro/
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageProject;
