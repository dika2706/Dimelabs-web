import React from 'react'
import MOSILanding from '../MOSILanding';
import Footer from '../Footer';
import MOSIBody from '../MOSIBody';
import {useEffect} from 'react';
export default function ProjectsKnife() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0});
      }, []);

  return (
    <>
    <MOSILanding/>
    <MOSIBody/>
    <Footer/>
    </>
  )
}
