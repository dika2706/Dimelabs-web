import '../../App.css';
import '../Projects.css';
import React from 'react';
import ProjectCards from '../ProjectCards';
import Footer from '../Footer';
import {useEffect} from 'react';


export default function Projects(){
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, [])
    return (
    <>
        <ProjectCards />
        <Footer />
        
    </>
    )

};
