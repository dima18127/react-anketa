// import logo from './logo.svg';
import React from 'react';
import { Routes, Route, } from "react-router-dom";
import Profile from './components/screens/Profile/Profile.jsx';
import Auth from './components/screens/Auth/Auth.jsx';
import Advantages from './components/screens/Advantages/Advantages.jsx';
import About from './components/screens/About/About.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Profile/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/advantages' element={<Advantages/>} />
      <Route path='/about' element={<About/>} />☻
      </Routes>
    </div>
  );
  
}

export default App;
