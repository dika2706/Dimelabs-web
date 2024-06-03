import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        {/* <section className='footer-intouch'>
            <p className='footer-intouch-heading'>Stay in touch to hear about our latest projects</p>
            <p className='footer-intouch-text'>You can unsubscribe at any time</p>
            <div className='input-areas'>
                <form>
                    <input type = "email" name = "email" placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle="btn--outline">Join Now</Button>
                </form>
            </div>
        </section> */}
        <div className='footer-links'>
            <div className='footer-links-wrapper'>
                <div className='footer-links-items'>
                    <h2>Our firm.</h2>
                    <Link className='footer-links-items-links' to='/about-us'>About Us</Link>
                    <Link className='footer-links-items-links' to='/projects'>Our Projects</Link>
                    <Link className='footer-links-items-links' to='/contact-us'>Contact Us</Link>
                   
                    
                </div>
            </div>
            
            
            {/* make other items: */}
            {/* <div className='footer-links-wrapper'>
                <div className='footer-links-'>
                    <h2>About us</h2>
                    <Link to='/contact-us'>Socials</Link>
                    <Link to='/contact-us'>Mission and Goals</Link>
                    <Link to='/contact-us'>Our Philosophy</Link>
                    <Link to='/contact-us'>Careers</Link>
                    <Link to='/contact-us'>Testimonials</Link>
                    
                </div>
                </div> */}
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to = "/" className='social-logo'><img alt='footerlogo' src='./images/dime-logo-word-white.png'></img></Link>
                </div>
                <small className='website-rights'>DimeLabs ID. ©</small>
                <div className='social-icons'>
                    {/* <Link to = '/' 
                    className='social-icon-link facebook'
                    target = "_blank"
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'/>
                    </Link> */}

                    <Link to = 'https://www.instagram.com/dimelabs.id/' 
                    className='social-icon-link instagram'
                    target = "_blank"
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'/>
                    </Link>
                    {/* <Link to = '/' 
                    className='social-icon-link LinkedIn'
                    target = "_blank"
                    aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin'/>
                    </Link>
                    <Link to = '/' 
                    className='social-icon-link youtube'
                    target = "_blank"
                    aria-label='Youtube'
                    >
                        <i className='fab fa-youtube'/>
                    </Link>
                    <Link to = '/' 
                    className='social-icon-link twitter'
                    target = "_blank"
                    aria-label='twitter'
                    >
                        <i className='fab fa-x-twitter'/>
                    </Link> */}
                </div>
            </div>
        </section>
        </div>
  )
}

export default Footer