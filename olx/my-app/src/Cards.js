import React from 'react'
import "./cards.css"

const Cards = ({img, disc, price, city, day}) => {
    return (
       
        <div className="card-container">
        
            <div className="card-image">
               
                    <img src={img}></img>
                
            </div>
            <div className="card-discription">
                <h2>Rs {price}</h2>
                <p style={{fontSize:"18px"}}>{disc}</p>
                <div style={{fontSize:"12px"}} className='card-bottom'>
                <p>{city}</p>
                <p>{day}</p>
                </div>
               
            </div>
        </div>
      
    )
}

export default Cards
