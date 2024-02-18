import '../../App.css';
import React from 'react';
import DesignSection from '../DesignSection';
import Cards from '../Cards';
import Footer from '../Footer';
import {useEffect} from 'react';
function Home() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, [])
    return (
        <>
            <DesignSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;