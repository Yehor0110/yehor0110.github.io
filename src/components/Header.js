import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    return (
      <header className="Main">
        <a href="index.html" id="logo">
          <img src={logo} alt="logotype"/>
        </a>
        <nav className="Navigation">
          <ul className="Menu">
            <li><a href="#progect-name" className="Active">Progect name</a></li>
            <li><a href="#description">Description</a></li>
            <li><a href="#workspace">Workspace</a></li>
            <li><a href="#main-footer">Footer</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header