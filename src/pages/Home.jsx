import { useState } from 'react';
import './Home.css';

function Home() {
  const [active, setActive] = useState(false);
  const activeMenu = () => {
    setActive(!active);
  };
  const rotateButton = (e) => {
    const element = e.target;
    if (element.classList.contains('st2')) {
      activeMenu();
      element.classList.remove('st2');
      setTimeout(() => {
        element.classList.remove('st1');
      }, 500);
    }

    if (!element.classList.contains('st1')) {
      activeMenu();
      element.classList.add('st1');
      setTimeout(() => {
        element.classList.add('st2');
      }, 500);
    }
  };

  return (
    <>
      <nav className={active ? 'navActive' : 'nav'}>
        <a href="google.com">
          <span>Home</span>
        </a>
        <a href="google.com">
          <span>Projetos</span>
        </a>
        <a href="google.com">
          <span>Contato</span>
        </a>
      </nav>
      <div className="content-home">
        <header className="header">
          <div className="burguer" onClick={rotateButton}>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </header>
        <div className="main">
          <h1 className="main-title">
            Ola meu nome é <span>Fernando Carvalho</span>
          </h1>
          <p className="main-description">
            Sou analista de sistema, pós graduado em ciencia de dados, porem
            minha grande paixão sempre foi o desenvolvimento web. Fique a
            vontade para conferir meus projetos mais recentes, clicando na aba
            de PROJETOS, ou visitando meu github.
          </p>
        </div>
      </div>

      <ul className="socials">
        <li className="github">
          <img src="" alt="" />
          <a
            href="https://github.com/fescarvalho"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
          </a>
        </li>
        <li className="linkedin">
          <a
            href="https://www.linkedin.com/in/fecarvalhodev/"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
          </a>
        </li>
        <li className="instagram">
          <a
            href="https://www.instagram.com/fescarv/"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Home;
