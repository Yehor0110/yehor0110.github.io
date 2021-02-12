import React from 'react';
import icon1 from '../img/icons/1.png';
import icon2 from '../img/icons/2.png';
import icon3 from '../img/icons/3.png';
import icon4 from '../img/icons/4.png';
import icon5 from '../img/icons/5.png';
import icon6 from '../img/icons/6.png';

class WorkSpaceSection extends React.Component {
    render () {
      return (
        <section id="Workspace">
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

  export default WorkSpaceSection
  