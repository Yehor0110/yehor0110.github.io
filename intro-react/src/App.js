import React from 'react';
import logo from './logo.svg';
import './App.css';

const HeaderComponent = () => {
  return (
    <header className="main">
			<a href="index.html" id="logo">
				<img src="img/logo.svg" alt="logotype"/>
			</a>
      <nav className="navigation">
        <ul className="menu">
          <li><a href="#progect-name" className="active">Progect name</a></li>
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
      <section className="about" id="progect-name">
        <div className="about-bgd">
          <div className="about-overlay">
            <h1>React Internship</h1>
            <p>
                JavaScript, HTML/CSS , на закінчення смакуватимемо React!
            </p>
            <a href="#main-footer" className="button-about">Лечу до вас!</a>
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
        <div className="description-bgd">
          <div className="description-overlay">
            <div className="image">
                <img src="img/ourStoryLogo.png" alt="logotype"/>
            </div>
            <div className="content">
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
        <div className="services-block">
          <div className="service">
              <a href="servises.html#box8-1">
                  <img src="img/icons/1.png" alt="web design"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>		
          </div>
          <div className="service">
              <a href="servises.html#box1-1">
                  <img src="img/icons/2.png" alt="BRANDING IDENTITY"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>		
          </div>
          <div className="service">
              <a href="servises.html#box2-1">
                  <img src="img/icons/3.png" alt="MOBILE APP"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="service">
              <a href="servises.html#box10-1">
                  <img src="img/icons/4.png" alt="SEARCH ENGINE OPTIMIZATION"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="service">
              <a href="servises.html#box7-1">
                  <img src="img/icons/5.png" alt="GAME DEVELOPMENT"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="service">
              <a href="servises.html#box9-1">
                  <img src="img/icons/6.png" alt="MADE WITH LOVE"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="clearfix"></div>
        </div>
      </section>
    );
  }
}

const MainFooter = () => {
  return (
    <footer id="main-footer">
			<div className="footer-bgd">
				<div className="footer-overlay">
          <div className="author">
              <h3>Yehor Valentiukevych</h3>
              <div className="wrap-links">
                  <a href="https://github.com/Yehor0110/yehor0110.github.io" className="git-link" target="_blank" title="GitHub">
                      <img src="img/icons/github.png" alt="GitHub"/>
                  </a>
                  <a href="http://psd-html-css.ru/sites/default/files/public/old/demo/tajem-rev.png" title="Origin Design" target="_blank" className="design-link">
                      <img src="img/icons/design.png" alt="Origin Design"/>
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
      <MainFooter/>
    </div>
  );
}

export default App;
