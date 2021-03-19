import React from 'react';

function Welcome(props) {
  const h1 = "React Internship";
  return <h1>{h1}</h1>;
}

function Text() {
  let aboutText = "JavaScript, HTML/CSS , на закінчення смакуватимемо React!";
  var level = 2;

  return (
    <div className="conteiner">
      <p>{aboutText}</p>
      <p>Level - {level}</p>
    </div>
  );
  
}

// function Button() {
//   let showButton = 'show';
//   const errorMassage = "ошибочка вышла";

//   if(showButton === 'show') {
//     return <a href="#main-footer" className="Button-about show">{showButton}</a>
//   } else {
//     return <a href="#main-footer" className="Button-about error">{errorMassage}</a>
//   }

// }

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: false}
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }
  
//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

class AboutSection extends React.Component {
  // 
    render () {
      return (
        <section className="About" id="Progect-name">
        
          <div className="About-bgd">
            <div className="About-overlay">
              <Welcome></Welcome>
              <Text></Text>
            </div>
          </div>	
        </section>
      );
    }
  }

  export default AboutSection