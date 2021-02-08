import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import DescriptionSection from './components/DescriptionSection';
import WorkSpaceSection from './components/WorkSpaceSection';
import Footer from './components/Footer';
import './styles/App.css';

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
  