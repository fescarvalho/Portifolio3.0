import React from 'react';
import './Socials.css';

function Socials() {
  return (
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
  );
}

export default Socials;
