import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Transition from '../Transition/Transition';
import NavButton from '../../components/NavButton/NavButton';
import './Contato.css';

function Contato() {
  const [loading, setLoading] = useState(false);

  function transition() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  useEffect(() => {
    transition();
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <Transition />
      ) : (
        <div className="contact">
          <NavButton />
          <div className="main-contact">
            <div className="main-email">
              <motion.h1
                initial={{ translateX: -1000 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 1 }}
              >
                Entre em contato...
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Se você quiser entrar em contato, falar comigo sobre uma
                colaboração de projeto ou apenas dizer oi, me envie um e-mail
                para
                <a href="mailto:fecarv_dev@outlook.com">
                  fecarv_dev@outlook.com
                </a>
                e vamos conversar.
              </motion.p>
            </div>
            <div className="main-social">
              <motion.h3
                initial={{ translateX: -1000 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 1 }}
              >
                Vamos socializar e criar networking...
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Siga minha página no <span>Twitter</span>,{' '}
                <span> Instagram </span>e <span> Linkedin.</span>
              </motion.p>
              <div className="socialLinks">
                <motion.a
                  initial={{ translateY: 1000 }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 1 }}
                  href="https://twitter.com/_fescarv"
                >
                  <img src="/icons/contact/twitter.svg" alt="" />
                  <span>Twitter</span>
                </motion.a>

                <motion.a
                  initial={{ translateY: 1000 }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 1.5 }}
                  href="https://www.linkedin.com/in/fecarvalhodev/"
                >
                  <img src="/icons/contact/linkedin.svg" alt="" />
                  <span>Linkedin</span>
                </motion.a>

                <motion.a
                  initial={{ translateY: 1000 }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 2 }}
                  href="https://www.instagram.com/fescarv/"
                >
                  <img src="/icons/contact/instagram.svg" alt="" />
                  <span>Instagram</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contato;
