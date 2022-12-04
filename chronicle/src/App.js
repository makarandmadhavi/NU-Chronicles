
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Register from './components/Register';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Login from './Pages/loginPage/index'

import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
     
      <Navigationbar />
      <Router>
      <Routes>
          <Route path='/register' element={<Login />}>Register</Route>
      </Routes>
        <Routes>
          <Route path='/' element={<Home />}>Register</Route>
        </Routes>
        <Routes>
          <Route path='/profile' element={ <Profile />}>Register</Route>
        </Routes>
        <Routes>
          <Route path='/dashboard' element={ <Dashboard />}>Register</Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
