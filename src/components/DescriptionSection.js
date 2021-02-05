import React from 'react';
import ourStoryLogo from '../img/ourStoryLogo.png';

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

  export default DescriptionSection