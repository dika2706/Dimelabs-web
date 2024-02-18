import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function ProjectCards() {
  return (
    <div className='cards'>
        <h1>
            Check out these projects!
        </h1>
        <div className='cards--container'>
            <div className='cards--wrapper'>
                {/* UL tag groups them */}
                <ul className='cards--items'>
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/knife-thumb.png"
                    text = "Designing a modular everyday carry knife"
                    label = "T.D.C. 002"
                    path = "../projectsknife"
                    />
               
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/img-5.jpg"
                    text = "This is a sample card"
                    label = "Most recent 2"
                    path = "../contact-us"
                    />
                </ul>
                <ul className='cards--items'>
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/img-1.jpg"
                    text = "This is a sample card"
                    label = "Design1"
                    path = "Projects"
                    />
               
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/img-2.jpg"
                    text = "This is a sample card"
                    label = "Design2"
                    path = "Projects"
                    />
                
                    {/* this is where we pass the cardItemJs */}
                     <CardItem
                    src = "./images/rasa-proj.jpg"
                    text = "Check out our latest project"
                    label = "The Rasa"
                    path = "../projectsrasa"
                    />
                </ul>
            </div>
        </div>
        </div>
  )
}

export default ProjectCards