import React from 'react';

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

  export default AboutSection