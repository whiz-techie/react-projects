import React from 'react';
import Cards from '../Cards';
import {data} from "../data";

const Carddisplay = () => {
    return (
        <div>
             <div className="card-component">
              {data.map((item)=>{
               return( <div className="individual-card" keys={item.price}>
              <Cards img={item.img} price={item.price} disc={item.disc} city={item.city} day={item.day}/>
             </div>)   })}
            </div>
        </div>
    )
}

export default Carddisplay
