
import React from 'react';
import Footer from '../Footer';
import RasaLanding from '../RasaLanding';
import RasaBody from '../RasaBody';
import {useEffect} from 'react';

export default function ProjectsRasa() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0});
      }, []);

    return (
        <>
        <RasaLanding/>
        <RasaBody/>
        <Footer/>
        </>
    )
}
