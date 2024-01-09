import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
function App() {
  return (
        <>
        <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path ='/Projects'element = {<Projects/>}></Route>
          <Route path ='/contact-us' element = {<ContactUs/>}></Route>
          
          </Routes>
        </Router>
        
        </>   
  );
}

export default App;
