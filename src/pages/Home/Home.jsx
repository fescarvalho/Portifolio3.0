import { useEffect } from 'react';
import NavButton from '../../components/NavButton/NavButton';
import Socials from '../../components/Socials/Socials';
import './Home.css';

function Home() {
  const textEffect = () => {
    const element = document.querySelector('p');
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) =>
      setTimeout(() => {
        element.innerHTML += letra;
      }, 50 * i),
    );
  };
  useEffect(() => {
    textEffect();
  }, []);

  return (
    <>
      <NavButton />
      <div className="content-home">
        <div className="main">
          <h1 className="main-title">
            Ola, meu nome é <span>Fernando Carvalho</span>
          </h1>
          <p className="main-description">
            Sou analista de sistema, pós graduado em ciencia de dados, porem
            minha grande paixão sempre foi o desenvolvimento web. Fique a
            vontade para conferir meus projetos mais recentes, clicando na aba
            de PROJETOS, ou visitando meu github.
          </p>
        </div>
      </div>
      <Socials />
    </>
  );
}

export default Home;
