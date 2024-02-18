import React from 'react'
import ProjectsKnifeLanding from '../ProjectsKnifeLanding';
import Footer from '../Footer';
import Projectsknifebody from '../Projectsknifebody';
import {useEffect} from 'react';
export default function ProjectsKnife() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0});
      }, []);

  return (
    <>
    <ProjectsKnifeLanding/>
    <Projectsknifebody/>
    
    <Footer/>
    </>
  )
}
