import React from 'react';
import iconGithub from '../img/icons/github.png';
import iconDesign from '../img/icons/design.png';

const Footer = () => {
    return (
      <footer id="Main-footer">
        <div className="Footer-bgd">
            <div className="Footer-overlay">
                <div className="Author">
                    <h3>Yehor Valentiukevych</h3>
                    <div className="Wrap-links">
                        <a href="https://github.com/Yehor0110/yehor0110.github.io" className="Git-link" target="_blank" rel="noreferrer" title="GitHub">
                            <img src={iconGithub} alt="GitHub"/>
                        </a>
                        <a href="http://psd-html-css.ru/sites/default/files/public/old/demo/tajem-rev.png" title="Origin Design" target="_blank" rel="noreferrer" className="Design-link">
                            <img src={iconDesign} alt="Origin Design"/>
                        </a>
                    </div>
                        
                    <a href="tel:+380662780005">
                        <p>+38 (066) 278-00-05</p>
                    </a>
                </div>
                <div className="Clearfix"></div>
            </div>	
        </div>					
      </footer>
    );
  }

  export default Footer
