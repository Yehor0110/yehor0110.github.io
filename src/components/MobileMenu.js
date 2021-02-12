import React from 'react';
import logo from '../img/logo.svg';
import close from '../img/popup-close.svg';

const MobileMenu = () => {
    const linksText = {
        a1: 'Progect name',
        a2: 'Description',
        a3: 'Workspace',
        a4: 'Footer'
      };
    return (
        <section className="Mobile-menu">
            <div id="Popup" className="Overlay">	
                <div className="Container">
                    <a href="index.html">
                        <img src={logo} alt="logotype"/>
                    </a>
                    <a href="#" className="Close"><img src={close} alt="close"/></a>
                    <nav className="Navigation">
                        <ul className="Menu">
                            <li><a href="#progect-name">{linksText.a1}</a></li>
                            <li><a href="#description">{linksText.a2}</a></li>
                            <li><a href="#workspace">{linksText.a3}</a></li>
                            <li><a href="#main-footer">{linksText.a4}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default MobileMenu
