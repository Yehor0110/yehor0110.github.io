import React from 'react';

class AboutSection extends React.Component {
    render () {
      const h1 = "React Internship";
      const aboutText = "JavaScript, HTML/CSS , на закінчення смакуватимемо React!";
      const aboutButton = "Лечу до вас!";

      return (
        <section className="About" id="Progect-name">
          <div className="About-bgd">
            <div className="About-overlay">
              <h1>{h1}</h1>
              <p>
                {aboutText}
              </p>
              <a href="#main-footer" className="Button-about">{aboutButton}</a>
            </div>
          </div>	
        </section>
      );
    }
  }

  export default AboutSection