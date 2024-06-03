import React from 'react'
import AboutUsLanding from '../AboutUsLanding';
import Footer from '../Footer';
import {useEffect} from 'react';
import AboutUsBody from '../AboutUsBody';
import { Inter, Sora } from 'next/font/google';
export default function AboutUs() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0});
  }, []);
  return (
    <>
    <AboutUsLanding/>
    <AboutUsBody/>
    <Footer/>
    </>
  )
}
