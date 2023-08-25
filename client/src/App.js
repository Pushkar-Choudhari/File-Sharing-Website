import './App.css';
import {Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';

import Files from './pages/Files';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path = '/' element  = {<Register/>} />
        <Route path = '/login' element  = {<Login/>} />
        <Route path = '/Files/:id' element = {<Files />} />
      </Routes>
    </div>
  );
}

export default App;
