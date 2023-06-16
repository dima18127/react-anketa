// import logo from './logo.svg';
import { Routes, Route, } from "react-router-dom";
import Profile from './components/screens/Profile/Profile.jsx';
import Auth from './components/screens/Auth/Auth.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Profile/>} />
      <Route path='/auth' element={<Auth/>} />
      </Routes>
    </div>
  );
  
}

export default App;
