import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import ProjectsRasa from './components/pages/ProjectsRasa';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import ProjectsKnife from './components/pages/ProjectsKnife';
import Goals from './components/pages/Goals';
function App() {
  return (
        <>
        <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path ='/Projects' element = {<Projects/>}></Route>
          <Route path ='/contact-us' element = {<ContactUs/>}></Route>
          <Route path = '/about-us' element = {<AboutUs/>}/>
          <Route path ='/projectsrasa' element = {<ProjectsRasa/>}></Route>
          <Route path ='/projectsknife' element = {<ProjectsKnife/>}></Route>
          <Route path = '/goals' element = {<Goals></Goals>}></Route>
          </Routes>
        </Router>
        
        </>   
  );
}

export default App;
