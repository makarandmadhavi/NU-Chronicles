
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
import Viewpost from './Pages/Viewpost';
import { ProtectedRoute } from './components/ProtectedRoute';
import { createContext, useReducer } from 'react';

import { reducer, initialState } from '../src/reducer/UseReducer'

export const UserContext = createContext();

function App() {

  

  const [ state, dispatch ] = useReducer(reducer, initialState)


  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>

        <Navigationbar />

      <div>
      <Router>
      <Routes>
          <Route path='/register' element={ <Login />}>Register</Route>
      
          <Route path='/' element={<Home />}>Register</Route>
        
          <Route path='/profile' element={ <ProtectedRoute> <Profile /></ProtectedRoute>}>Register</Route>
       
          <Route path='/admin' element={ <AdminDash />}>Register</Route>
        
          <Route path='/dashboard' element={ <Dashboard />}>Register</Route>
        
          <Route path='/addpost' element={ <Addpost />}>Register</Route>
      
          <Route path='/viewpost' element={ <Viewpost/>}>Register</Route>
        </Routes>
      </Router>
      </div>
      <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
