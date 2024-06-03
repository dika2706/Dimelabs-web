import React from 'react'
import './Jeep.css'
function JeepBody() {
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
                        Design a travel accessory that embraces <b>JEEP</b>’s sense of
                        freedom, adventure, authenticity, and passion.  </p>
                        <p>
                        Overlanding is the act of travelling on land, focusing on the
journey. Unlike regular campers, tents are typically set on
the roof of the vehicle. Several reasons why people prefer
overlanding is for safety, comfort from terrain, and security.
</p>
                        <img id = 'jeep-truck' src='/images/jeep-truck.png' alt='Use case'/>
                    </div>
                    <div className='MOSI-body-content-overview-wrap'>
                        <h3 className='section-title'>
                        Our Focus
                        </h3>
    
                        <p>
                        Creating a tent/camp shelter that is both independent
and dependent of the 2 door Wrangler JL, that eliminates
the need for external or aftermarket accessories.
                        </p>
                        <img src='/images/jeep-focus.png' alt='Use case'/>
                    </div>
                    <div className='MOSI-body-content-overview-wrap'>
                        <h3 className='section-title'>
                            Assembly and Design
                        </h3>
                        <img src='/images/jeep-assembly.png' alt='Diagram'/>
                        <img src='/images/carSketch.png' alt='Diagram'/>
                    </div>
                    <div className='MOSI-body-content-overview-wrap'>
                        <h3 className='section-title'>
                            Dimensions and Materials
                        </h3>
    
                         <img src='/images/jeep-materials.png' alt='Hologram'/>
                         <img src='/images/jeep-dimensions.png' alt='Hologram'/>
                         
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </>  )
}

export default JeepBody