import React from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom';
function CULanding() {
  return (
    <>
        <div className='CU-landing'>
            <div className='CU-landing-wrap'>
                <div className='CU-landing-bg'>
                    <img className="CU-bg" alt='design background' src = "/images/tent-background.png"/>
                </div>
                <div className='title-card-CU'>
                    <h1>Get in touch with us</h1>
                </div>
                <div className='contacts-section'>
                    <div className='email-contact'>
                        <h2> <a href="mailto:dimelabs.id@gmail.com"><i class="fa-regular fa-envelope"></i> dimelabs.id@gmail.com</a></h2>
                    </div>
                    
                    <div className='ig-contact'>
                    <Link to = 'https://www.instagram.com/dimelabs.id/' 
                    className='social-icon-link instagram'
                    target = "_blank"
                    aria-label='Instagram'
                    >                   
                        <h2>
                        <i className='fab fa-instagram'/> dimelabs.id
                        </h2>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </>  )
}

export default CULanding