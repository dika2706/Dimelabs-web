import React from 'react'
import JeepLanding from '../JeepLanding';
import JeepBody from '../JeepBody';
import Footer from '../Footer';
import {useEffect} from 'react';

export default function ProjectsKnife() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0});
      }, []);

  return (
    <>
    <JeepLanding/>
    <JeepBody/>
    <Footer/>
    </>
  )
}
