import React from 'react';
import logo from './img/logo.svg';
import ourStoryLogo from './img/ourStoryLogo.png';
import icon1 from './img/icons/1.png';
import icon2 from './img/icons/2.png';
import icon3 from './img/icons/3.png';
import icon4 from './img/icons/4.png';
import icon5 from './img/icons/5.png';
import icon6 from './img/icons/6.png';
import iconGithub from './img/icons/github.png';
import iconDesign from './img/icons/design.png';


import './App.css';

const HeaderComponent = () => {
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

class AboutSection extends React.Component {
  render () {
    return (
      <section className="About" id="progect-name">
        <div className="About-bgd">
          <div className="About-overlay">
            <h1>React Internship</h1>
            <p>
                JavaScript, HTML/CSS , на закінчення смакуватимемо React!
            </p>
            <a href="#main-footer" className="Button-about">Лечу до вас!</a>
          </div>
        </div>	
      </section>
    );
  }
}

class DescriptionSection extends React.Component {
  render () {
    return (
      <section id="description">
        <div className="Description-bgd">
          <div className="Description-overlay">
            <div className="Image">
                <img src={ourStoryLogo} alt="logotype"/>
            </div>
            <div className="Content">
              <h2>Lorem ipsum dolor sit</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aperiam totam neque esse enim. Fugiat doloremque, 
                  commodi quis voluptates harum repellat praesentium maxime 
                  magni velit cumque dolorem vel ea neque consequuntur.
              </p>

              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aperiam totam neque esse enim. Fugiat doloremque, 
                  commodi quis voluptates harum repellat praesentium maxime 
                  magni velit cumque dolorem vel ea neque consequuntur.
              </p>
            </div>          
          </div>
        </div>	
      </section>
    );
  }
}

class WorkSpaceSection extends React.Component {
  render () {
    return (
      <section id="workspace">
        <h2>Lorem ipsum dolor sit amet</h2>
        <h4>Aperiam totam neque esse enim</h4>
        <div className="Services-block">
          <div className="Service">
            <a href="index.html">
              <img src={icon1} alt="web design"/>
              <h3>Lorem ipsum dolor sit amet consectetur</h3>
              <p>
                Fugiat doloremque, commodi quis voluptates harum
              </p>
            </a>		
          </div>
          <div className="Service">
              <a href="index.html">
                  <img src={icon2} alt="BRANDING IDENTITY"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>		
          </div>
          <div className="Service">
              <a href="index.html">
                  <img src={icon3} alt="MOBILE APP"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="Service">
              <a href="index.html">
                  <img src={icon4} alt="SEARCH ENGINE OPTIMIZATION"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="Service">
              <a href="index.html">
                  <img src={icon5} alt="GAME DEVELOPMENT"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="Service">
              <a href="index.html">
                  <img src={icon6} alt="MADE WITH LOVE"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="Clearfix"></div>
        </div>
      </section>
    );
  }
}

const MainFooter = () => {
  return (
    <footer id="main-footer">
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
				</div>	
			</div>					
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <AboutSection/>
      <DescriptionSection/>
      <WorkSpaceSection/>
      <MainFooter/>
    </div>
  );
}

export default App;
