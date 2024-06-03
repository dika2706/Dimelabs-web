import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function ProjectCards() {
  return (
    <div className='cards'>
        <h1 className='cards-title'>
            a catalog of our past projects.
        </h1>
        <div className='cards--container'>
            <div className='cards--wrapper'>
                {/* UL tag groups them */}
                <ul className='cards--items'>
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/knife-thumb.png"
                    text = "T.D.C. 002. Modular everyday knife."
                    label = "2021"
                    path = "../projectsknife"
                    />
               
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/MOSI_Thumb.png"
                    text = "MOSI. Improving exercise and physical therapy."
                    label = "2022"
                    path = "../projectsMOSI"
                    />
                
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/tent-background.png"
                    text = "Jeep overlanding tent. Col. w/ FCA."
                    label = "2020"
                    path = "../projectsJeep"
                    />
               
                    {/* this is where we pass the cardItemJs
                    <CardItem
                    src = "./images/img-2.jpg"
                    text = "This is a sample card"
                    label = "Design2"
                    path = "Projects"
                    />
                
                    
                     <CardItem
                    src = "./images/rasa-proj.jpg"
                    text = "Check out our latest project"
                    label = "The Rasa"
                    path = "../projectsrasa"
                    /> */}
                </ul>
            </div>
        </div>
        </div>
  )
}

export default ProjectCards