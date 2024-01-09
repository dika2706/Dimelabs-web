import React from 'react'
import { Button } from './Button'
import '../App.css';
import './DesignSection.css';

function DesignSection() {
  return (
    <div className='design-container'>
        {/* <video src = '/videos/video-2.mp4' autoPlay muted loop/> */}
        <img className="design-container-bg"alt='design background' src= "/images/concept.jpg"/>
        <h1>Welcome to DimeLabs</h1>
        <p>We design your future.</p>
        <div className="design-btns">
            <Button className='btns' buttonStyle = "btn--outline" buttonSize = "btn--large">GET STARTED</Button>
            <Button className='btns' buttonStyle = "btn--primary" buttonSize = "btn--large">Watch Showcase 
            <i className='far fa-play-circle'/>
            </Button>

        </div>
    </div>
  )
}

export default DesignSection