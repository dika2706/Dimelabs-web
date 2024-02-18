import React from 'react'
import './RasaLanding.css'

function RasaLanding() {
  return (
    <div className='rasa-container'>
        {/* <video className = "rasavideo" src = '/videos/video-2.mp4' autoPlay controls muted loop/> */}
        <img className="rasa-bg" alt='design background' src = "/images/rasa-proj.jpg"/>
        <h1>rasa.</h1>
        
        {/* <div className="design-btns">
            <ButtonRasaWatch className='btns' buttonStyle = "btn--outline" buttonSize = "btn--large">Watch Showcase 
            <i className='far fa-play-circle'/>
            </ButtonRasaWatch>
            <div className='rasa-showcase'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw?si=zp43wWZFlNJrV9mY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div> */}
    </div>
  )
}

export default RasaLanding