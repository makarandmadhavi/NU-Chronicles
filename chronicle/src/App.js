
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Register from './components/Register';
import Navigationbar from './components/Navigationbar';


function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Router>
      <Routes>
          <Route path='/register' element={<Register />}>Register</Route>
      </Routes>
        <Routes>
          <Route path='/' element={<Home />}>Register</Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
