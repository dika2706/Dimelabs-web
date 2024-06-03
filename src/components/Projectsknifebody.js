import React from 'react'
import './Projectsknifebody.css';

function Projectsknifebody() {
  return (
    <>
    <div className='knife-body'>
        <div className='knife-body-wrap'>
            <div className='knife-body-content'>
                <img className="image-knife"src='./images/knife-showcase.png' alt='Knife-content'/>
                <div className='knife-body-content-text'>
                 <h2>A modular everyday knife.</h2>
                 <h4>a modular, travel friendly, and pocketable knife</h4>
                 <hr className='txt-seperator'></hr>
                 
                 <h3>Features: </h3>
                 <ul className='feature-list'>
                    <li>
                        Knurled Spine Spacer
                    </li>
                    <li>
                        Tanto Edge
                    </li>
                    <li>
                        Chevron Textured Grip
                    </li>
                    <li>
                        Reversible clip
                    </li>
                    <li>
                        Thumb stud
                    </li>
                    <li>
                        Ergonomic thumb grip zone
                    </li>
                 </ul>
                </div>
                <hr></hr>
                
            </div>
            <div className='knife-body-subject'>
                    <h3 className='knife-subject-header'>
                        Designing the perfect knife.
                    </h3>
                    <p className='knife-subject-text'>
                        "Designing the knife was a challenge. Here's the thought process. For reason's <b>ABC</b> and especially <b>DEFG</b> HIGHLIGHTING CERTAIN KEYWORDS"
                    </p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Projectsknifebody