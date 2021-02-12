import React from 'react';
import logo from '../img/logo.svg';
import close from '../img/popup-close.svg';

const MobileMenu = () => {
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
                            <li><a href="#progect-name">Progect name</a></li>
                            <li><a href="#description">Description</a></li>
                            <li><a href="#workspace">Workspace</a></li>
                            <li><a href="#main-footer">Footer</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default MobileMenu
