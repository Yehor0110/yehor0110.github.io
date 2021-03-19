import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import DescriptionSection from './components/DescriptionSection';
import WorkSpaceSection from './components/WorkSpaceSection';
import { MainBiography } from "./components/MainBiography";
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu'
import './styles/App.css';

function App() {
    return (
      <div className="App">
        <Header/>
        <AboutSection/>
        <DescriptionSection/>
        <WorkSpaceSection/>
        <MainBiography/>
        <Footer/>
        <MobileMenu/>
      </div>
    );
  }
  
  export default App;
  