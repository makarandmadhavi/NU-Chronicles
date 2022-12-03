import logo from './logo.svg';
import './App.css';
import Navigationbar from './Pages/Navigationbar';
import ControlledCarousel from './Pages/ControlledCarousel';
import AboutUs from './Pages/AboutUs';
import ScrollspyComponent from './Pages/ScrollspyComponent';
import Footer from './Pages/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Navigationbar />
      <ControlledCarousel />
      <AboutUs />
      <ScrollspyComponent />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
