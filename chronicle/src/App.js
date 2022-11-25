import logo from './logo.svg';
import './App.css';
import Navigationbar from './Pages/Navigationbar';
import ControlledCarousel from './Pages/ControlledCarousel';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <ControlledCarousel />
      <AboutUs />
    </div>
  );
}

export default App;
