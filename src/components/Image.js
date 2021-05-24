import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import {TooltipMap} from "./TooltipMap";
import Pin from '../img/pin.png'

const Image = ({ url, title, imageId, locality, lat, long, country }) => {

   return(
       <>
           <ReactTooltip id={`image${imageId}`} className='tooltip-container'>
               <TooltipMap lat={lat} long={long} locality={locality} country={country} />
           </ReactTooltip>
           <li className='pin-container' data-tip data-for={`image${imageId}`}>
               {lat && <div className='pin-wrapper'><img className='pin' src={Pin} /></div>}
               <img className='photo-image' src={url} alt={title}/>
           </li>
       </>
   )

};

export default Image;
