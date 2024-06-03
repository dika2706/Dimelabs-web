import React from 'react'
import './MOSIBody.css'
function ProjectsKnifeLanding() {
  return (
    <>
        <div className='MOSI-body'>
            <div className='MOSI-body-wrap'>
                <div className='MOSI-body-content'>
                   
                    <div className='MOSI-body-content-overview-wrap'>
                        <h3 className='section-title'>
                            Overview
                        </h3>
                        <p className='section-head'>
                        To improve the <b>accessibility & outcome</b> of physical therapy
                        </p>
                        <p>
                        MOSI is a conceptual device that aims to improve accessibility and outcome of physical therapy by fusing future technology and medicine. The device consists of a holographic projector and sensors to guide users in performing the best possible exercises. Its compact and unassuming design allows portability which fits for every living space.
                        </p>
                        <img src='/images/MOSI-useskeetch.png' alt='Use case'/>
                    </div>
                    <div className='MOSI-body-content-overview-wrap'>
                        <h3 className='section-title'>
                            Posture awareness & MOSI
                        </h3>
    
                        <p>
                            Using <b>AI and data from physical therapists</b> to modify exercise to fit user's fitness and physical stress levels. Furthermore, motion sensors and thermal sensors scan for fatigue, stress, injury.
                        </p>
                    </div>
                    <div className='MOSI-body-content-overview-wrap'>
                        <h3 className='section-title'>
                            Holograms as a display
                        </h3>
    
                        <p>
                            Holograms allow us to use a <b>3D representation and a 360 degree visualization</b>.
                            This allows for more interaction and an easier learning curve.
                        </p>
                        <img src='/images/hologram-diagram.png' alt='Diagram'/>
                    </div>
                    <div className='MOSI-body-content-overview-wrap'>
                        <h3 className='section-title'>
                            Alignment and Holograms
                        </h3>
    
                        <p>
                        Users will have to match
                        the touch points in order to
                        achieve perfect form

                        unaligned touch points will
                        be shown in red

                        AI programing and
                        thermal imaging will assess
                        fatigue or stress in the
                        anatomy and alter exercise
                        accordingly
                        </p>
                        <img src='/images/alignment-mosi.png' alt='Hologram'/>
                    </div>
                    <div className='MOSI-gallery'>
                      <img src='/images/mosi-block.png' alt='Hologram'/>
                      <img src='/images/mosi-charge.png' alt='Hologram'/>
                      <img src='/images/mosi-side.png' alt='Hologram'/>
                    </div>
                </div>
            </div>
            
        </div>
        
    </>  )
}

export default ProjectsKnifeLanding