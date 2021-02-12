import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
  const linksText = {
    a1: 'Progect name',
    a2: 'Description',
    a3: 'Workspace',
    a4: 'Footer'
  };
    return (
      <header className="Main">
        <a href="index.html" id="Logo">
          <img src={logo} alt="logotype"/>
        </a>
        <nav className="Navigation">
          <ul className="Menu">
            <li><a href="#progect-name" className="Active">{linksText.a1}</a></li>
            <li><a href="#description">{linksText.a2}</a></li>
            <li><a href="#workspace">{linksText.a3}</a></li>
            <li><a href="#main-footer">{linksText.a4}</a></li>
          </ul>
        </nav>
        <a href="#Popup" className="Mob-menu Example5"><span></span></a>
      </header>
    );
  }

  export default Header
  