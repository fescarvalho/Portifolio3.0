/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavButton from '../../components/NavButton/NavButton';
import Socials from '../../components/Socials/Socials';

import './Home.css';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  function mobile() {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    }
  }

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
    mobile();
    textEffect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        <motion.div
          className="curriculo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 12 }}
        >
          <a href="https://drive.google.com/u/0/uc?id=1SlAM37dt21--5jbLqTNa6jbjc91TKDhJ&export=download">
            <img src="/icons/arrownDown.svg" alt="" />
            Currículo
          </a>
        </motion.div>
      </div>
      <Socials />
    </motion.div>
  );
}

export default Home;
