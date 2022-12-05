
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './Pages/Profile';
import Home from './Pages/Home';
// import Register from './components/Register';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Login from './Pages/loginPage/index'
import Addpost from './Pages/Addpost'
import Dashboard from './Pages/Dashboard';
import AdminDash from './Pages/AdminDash';


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
          <Route path='/admin' element={ <AdminDash />}>Register</Route>
        </Routes>
        <Routes>
          <Route path='/dashboard' element={ <Dashboard />}>Register</Route>
        </Routes>
        <Routes>
          <Route path='/addpost' element={ <Addpost />}>Register</Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
