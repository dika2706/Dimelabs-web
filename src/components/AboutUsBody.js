import React from 'react'
import './aboutUs.css'

function AboutUsBody() {
    return (
        
        <>
        
            <div className='aboutus-body'>
                
                <div className='aboutus-body-wrap'>
                    <h1 className='aboutus-title'>
                        about us. 
                    </h1>

                    <p className='aboutus-text'>
                    <b className='highlights'>DIME labs</b> is an acronym for <b className='highlights'>design, innovation, manufacturing and engineering </b> is an 
                    Indonesian based product development firm 
                    focused on innovation and solution finding for new or 
                    existing products. The majority of our services, from design to manufacturing, is done in house
                     to maintain the 
                     highest quality of service. Our 
                     firm collaborates with clients from multiple industries 
                     and are limited to none. 
                    </p>
                    <h1 className='aboutus-title'>
                        our mission.
                    </h1>
                    <div className='aboutus-text'>
                            <ul>
                                <li>
                                    Support and create potential or existing ideas as an incubator of <b className='highlights'>innovation and solution finding</b>; implementing users at the core of operation. 
                                </li>
                                <li>
                                    Creating the most successful ecosystem for product development through <b>in house</b> operations; thus, maintaining the highest level & quality of design, innovation, manufacturing, engineering and other design processes.
                                </li>
                                <li>
                                Create viable, manufacturable and efficient products that are <b>appealing and useful</b>.
                                </li>
                                <li>
                                    Building a design <b>community</b>
                                </li>
                            </ul>
                        
                    </div>
                  
                </div>
            <div className='gallery'>
                <div className='aboutus-collage'>
                <img title="MOSI" className='body-img-workingguy' alt = "" src='./images/workingGuy.png'/>
                <img title="ARC"className='body-img-arc' alt = "" src='./images/arcPhoto.png'/>
                <img title ="ALU" className='body-img-alu' alt = "" src='./images/aluProduct.png'/>
                <img title="JEEP"className='body-img-car' alt = "" src='./images/carSketch.png'/>
                <img title ="T.D.C 002" className='body-img-knife' alt = "" src='./images/knifeDetails.png'/>
            </div>
            </div>
            </div>
          
           
            
        </>  )
}

// const gallery = document.getElementById('gallery');
// window.onmousemove = e => {
//     const mouseX = e.clientX, mouseY = e.clientY;
//     const xDecimal = mouseX / window.innerWidth;
//     const yDecimal = mouseY / window.innerHeight;
//     const panX = gallery.offsetWidth *xDecimal * -1;
//     const panY = gallery.offsetHeight * yDecimal * -1;
//     gallery.style.transform = 'translate(${panX}px, ${panY}px';

// }

export default AboutUsBody