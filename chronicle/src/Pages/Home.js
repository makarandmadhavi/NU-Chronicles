import React from 'react'
import Navigationbar from '../components/Navigationbar';
import ControlledCarousel from '../components/ControlledCarousel';
import AboutUs from '../components/AboutUs';
import ScrollspyComponent from '../components/ScrollspyComponent';
import Tophits from '../components/Tophits';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';

function Home() {
  return (
    <div>
    {/* <Navigationbar /> */}
    <ControlledCarousel />
    <AboutUs />
    <ScrollspyComponent />
    <Tophits />
   
    
    </div>
  )
}

export default Home