import {React} from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home'
import Updates from './components/Updates';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/updates' element={<Updates />} />
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
