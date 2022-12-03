
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Home />
      </Router>
    </div>
  );
}

export default App;
