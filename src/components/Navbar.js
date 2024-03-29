import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import { Button } from './Button';

    function Navbar() {
        const [click, setClick] = useState(false);
        const [button, setButton] = useState(true);

        const handleClick = () => {
            setClick(!click);
        };
        const closeMobileMenu = () => {
            setClick(false);
        };

        const showButton = () => {
            if(window.innerWidth <= 960){
                setButton(false);
            }
            else{
                setButton(true);
            }
        };
        useEffect(() => {
            showButton()
        }, [])
        window.addEventListener('resize', showButton); //resize for mobile
    return (
        <>
            <nav className = "navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}> 
                    <img src='./images/dime-logo-white.png' alt='dimelogowhite'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to = '/Projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/about-us' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-links-mobile'> 
                        {/* ^^nav-links-mobile and button below needed */}
                            <Link to = '/Contact-us' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link> 
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'> Contact Us</Button>}            
                </div>
            </nav>
        </>
    );
    }

    export default Navbar