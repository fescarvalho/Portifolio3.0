import React from 'react';
import NavButton from '../../components/NavButton/NavButton';
import './Contato.css';

function Contato() {
  return (
    <div className="contact">
      <NavButton />
      <div className="main-contact">
        <div className="main-email">
          <h1>Entre em contato...</h1>
          <p>
            Se você quiser entrar em contato, falar comigo sobre uma colaboração
            de projeto ou apenas dizer oi, me envie um e-mail para
            <a href="mailto:fernando_scarvalho@hotmail.com">
              {' '}
              fernando_scarvalho@hotmail.com
            </a>{' '}
            e vamos conversar.
          </p>
        </div>
        <div className="main-social">
          <h3>Vamos socializar e criar networking...</h3>
          <p>
            Siga minha página no <span>Twitter</span> , <span>Instagram </span>e{' '}
            <span> Linkedin.</span>
          </p>
          <div className="socialLinks">
            <a href="https://twitter.com/_fescarv">
              <img src="/icons/contact/twitter.svg" alt="" />
              <span>Twitter</span>
            </a>

            <a href="https://www.linkedin.com/in/fecarvalhodev/">
              <img src="/icons/contact/linkedin.svg" alt="" />
              <span>Linkedin</span>
            </a>

            <a href="https://www.instagram.com/fescarv/">
              <img src="/icons/contact/instagram.svg" alt="" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
