import './Home.css';

function Home() {
  return (
    <>
      <div className="content-home">
        <header className="header">
          <div className="burguer">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
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
