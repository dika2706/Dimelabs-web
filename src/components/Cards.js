import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1 className='cards-title'>
            recent projects.
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
                    path = "projectsknife"
                    />
               
                    {/* this is where we pass the cardItemJs */}
                    <CardItem
                    src = "./images/MOSI_Thumb.png"
                    text = "MOSI. Improving exercise and physical therapy."
                    label = "2022"
                    path = "../projectsMOSI"
                    />
                </ul>
                
            </div>
        </div>
        </div>
  )
}

export default Cards