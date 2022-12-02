import logo from './logo.svg';
import './App.css';
import Navigationbar from './Pages/Navigationbar';
import ControlledCarousel from './Pages/ControlledCarousel';
import AboutUs from './Pages/AboutUs';
import ScrollspyComponent from './Pages/ScrollspyComponent';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <ControlledCarousel />
      <AboutUs />
      <ScrollspyComponent />
      <Footer />
    </div>
  );
}

export default App;
