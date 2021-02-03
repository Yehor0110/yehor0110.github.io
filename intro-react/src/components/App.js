import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import DescriptionSection from './DescriptionSection';
import WorkSpaceSection from './WorkSpaceSection';
import Footer from './Footer';
import '../css/App.css';

function App() {
    return (
      <div className="App">
        <Header/>
        <AboutSection/>
        <DescriptionSection/>
        <WorkSpaceSection/>
        <Footer/>
      </div>
    );
  }
  
  export default App;