import '../../App.css';
import React from 'react';
import Footer from '../Footer';
import ContactUsLanding from '../ContactUsLanding';
import {useEffect} from 'react';
import { Inter, Sora } from 'next/font/google';
export default function ContactUs(){
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, [])
    return (
    <>
        <ContactUsLanding/>

        <Footer />
    </>
    )
};