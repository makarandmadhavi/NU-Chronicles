import logo from './logo.svg';
import './App.css';
import Navigationbar from './Pages/Navigationbar';
import ControlledCarousel from './Pages/ControlledCarousel';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <ControlledCarousel />
    </div>
  );
}

export default App;
