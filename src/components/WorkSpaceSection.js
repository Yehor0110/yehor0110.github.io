import React from 'react';
import icon1 from '../img/icons/1.png';
import icon2 from '../img/icons/2.png';
import icon3 from '../img/icons/3.png';
import icon4 from '../img/icons/4.png';
import icon5 from '../img/icons/5.png';
import icon6 from '../img/icons/6.png';

class WorkSpaceSection extends React.Component {
    render () {
      const workspaceHeader = {
          h2: 'Lorem ipsum dolor sit amet',
          h4: 'Aperiam totam neque esse enim'
      };
      const servise1 = {
        h3: 'Lorem ipsum dolor sit amet consectetur',
        p: 'Fugiat doloremque, commodi quis voluptates harum'
      };
      const servise2 = {
        h3: 'Lorem2 ipsum dolor sit amet consectetur',
        p: 'Fugiat doloremque, commodi quis voluptates harum'
      };
      const servise3 = {
        h3: 'Lorem3 ipsum dolor sit amet consectetur',
        p: 'Fugiat doloremque, commodi quis voluptates harum'
      };
      const servise4 = {
        h3: 'Lorem4 ipsum dolor sit amet consectetur',
        p: 'Fugiat doloremque, commodi quis voluptates harum'
      };
      const servise5 = {
        h3: 'Lorem5 ipsum dolor sit amet consectetur',
        p: 'Fugiat doloremque, commodi quis voluptates harum'
      };
      const servise6 = {
        h3: 'Lorem6 ipsum dolor sit amet consectetur',
        p: 'Fugiat doloremque, commodi quis voluptates harum'
      };

      return (
        <section id="Workspace">
          <h2>{workspaceHeader.h2}</h2>
          <h4>{workspaceHeader.h4}</h4>
          <div className="Services-block">
            <div className="Service">
                <a href="index.html">
                    <img src={icon1} alt="web design"/>
                    <h3>{servise1.h3}</h3>
                    <p>{servise1.h3}</p>
                </a>		
            </div>
            <div className="Service">
                <a href="index.html">
                    <img src={icon2} alt="BRANDING IDENTITY"/>
                    <h3>{servise2.h3}</h3>
                    <p>{servise2.p}</p>
                </a>		
            </div>
            <div className="Service">
                <a href="index.html">
                    <img src={icon3} alt="MOBILE APP"/>
                    <h3>{servise3.h3}</h3>
                    <p>{servise3.p}</p>
                </a>	
            </div>
            <div className="Service">
                <a href="index.html">
                    <img src={icon4} alt="SEARCH ENGINE OPTIMIZATION"/>
                    <h3>{servise4.h3}</h3>
                    <p>{servise4.p}</p>
                </a>	
            </div>
            <div className="Service">
                <a href="index.html">
                    <img src={icon5} alt="GAME DEVELOPMENT"/>
                    <h3>{servise5.h3}</h3>
                    <p>{servise5.p}</p>
                </a>	
            </div>
            <div className="Service">
                <a href="index.html">
                    <img src={icon6} alt="MADE WITH LOVE"/>
                    <h3>{servise6.h3}</h3>
                    <p>{servise6.p}</p>
                </a>	
            </div>
            <div className="Clearfix"></div>
          </div>
        </section>
      );
    }
  }

  export default WorkSpaceSection
  