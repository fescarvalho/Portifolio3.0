import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavButton.css';

function NavButton() {
  const [active, setActive] = useState(false);

  const activeMenu = () => {
    setActive(!active);
  };

  const rotateButton = (e) => {
    const element = e.target;
    if (element.classList.contains('st2')) {
      element.classList.remove('st2');
      setTimeout(() => {
        element.classList.remove('st1');
      }, 500);
      activeMenu();
    }

    if (!element.classList.contains('st1')) {
      element.classList.add('st1');
      setTimeout(() => {
        element.classList.add('st2');
      }, 500);
      activeMenu();
    }
  };

  return (
    <>
      <nav className={active ? 'navActive' : 'nav'}>
        <NavLink end onClick={rotateButton} to="/">
          <span>Home</span>
        </NavLink>
        <NavLink onClick={rotateButton} to="/projetos">
          <span>Projetos</span>
        </NavLink>
        <NavLink onClick={rotateButton} to="/contato">
          <span>Contato</span>
        </NavLink>
      </nav>
      <div className="menuBurguer">
        <div className="burguer" onClick={rotateButton}>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </>
  );
}

export default NavButton;
