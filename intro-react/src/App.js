import React from 'react';
import logo from './logo.svg';
import './App.css';

const HeaderComponent = () => {
  return (
    <header className="Main">
      <a href="index.html" id="logo">
        <img src="img/logo.svg" alt="logotype"/>
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
                <img src="img/ourStoryLogo.png" alt="logotype"/>
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
            <a href="servises.html#box8-1">
              <img src="img/icons/1.png" alt="web design"/>
              <h3>Lorem ipsum dolor sit amet consectetur</h3>
              <p>
                Fugiat doloremque, commodi quis voluptates harum
              </p>
            </a>		
          </div>
          <div className="Service">
              <a href="servises.html#box1-1">
                  <img src="img/icons/2.png" alt="BRANDING IDENTITY"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>		
          </div>
          <div className="Service">
              <a href="servises.html#box2-1">
                  <img src="img/icons/3.png" alt="MOBILE APP"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="Service">
              <a href="servises.html#box10-1">
                  <img src="img/icons/4.png" alt="SEARCH ENGINE OPTIMIZATION"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="Service">
              <a href="servises.html#box7-1">
                  <img src="img/icons/5.png" alt="GAME DEVELOPMENT"/>
                  <h3>Lorem ipsum dolor sit amet consectetur</h3>
                  <p>
                      Fugiat doloremque, commodi quis voluptates harum
                  </p>
              </a>	
          </div>
          <div className="Service">
              <a href="servises.html#box9-1">
                  <img src="img/icons/6.png" alt="MADE WITH LOVE"/>
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
                  <a href="https://github.com/Yehor0110/yehor0110.github.io" className="Git-link" target="_blank" title="GitHub">
                      <img src="img/icons/github.png" alt="GitHub"/>
                  </a>
                  <a href="http://psd-html-css.ru/sites/default/files/public/old/demo/tajem-rev.png" title="Origin Design" target="_blank" className="Design-link">
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
      <WorkSpaceSection/>
      <MainFooter/>
    </div>
  );
}

export default App;
