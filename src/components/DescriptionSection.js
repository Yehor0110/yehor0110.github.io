import React from 'react';
import ourStoryLogo from '../img/ourStoryLogo.png';

class DescriptionSection extends React.Component {
    render () {
      const descriptionHeader = "Lorem ipsum dolor sit";
      const descriptionText = {
        p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam neque esse enim. Fugiat doloremque, commodi quis voluptates harum repellat praesentium maxime magni velit cumque dolorem vel ea neque consequuntur.',
        p2: 'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam neque esse enim. Fugiat doloremque, commodi quis voluptates harum repellat praesentium maxime magni velit cumque dolorem vel ea neque consequuntur.'
      };

      return (
        <section id="Description">
          <div className="Description-bgd">
            <div className="Description-overlay">
              <div className="Image">
                <img src={ourStoryLogo} alt="logotype"/>
              </div>
              <div className="Content">
                <h2>{descriptionHeader}</h2>
                <p>
                  {descriptionText.p1}
                </p>

                <p>
                {descriptionText.p2}
                </p>
              </div>          
            </div>
          </div>	
        </section>
      );
    }
  }

  export default DescriptionSection
  