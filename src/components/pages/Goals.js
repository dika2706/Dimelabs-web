import React from 'react'
import { useEffect } from 'react';
import Footer from '../Footer';
import { Inter, Sora } from 'next/font/google';
export default function Goals() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0});
      }, []);
  return (
    
    <>
    <h1>
       Mission and Goals
    </h1>
    <Footer/>
    </>
  )
}
