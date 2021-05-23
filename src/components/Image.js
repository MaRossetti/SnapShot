import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import {TooltipMap} from "./TooltipMap";
import Pin from '../img/pin.png'

const Image = ({ url, title, imageId, imageSecret }) => {
   const [hasGeoLocation, setHasGeoLocation] = useState(false);

   return(
       <>
           <ReactTooltip id={`image${imageId}`} className='tooltip-container'>
               <TooltipMap setHasGeoLocation={setHasGeoLocation} imageId={imageId} imageSecret={imageSecret} />
           </ReactTooltip>
           <li className='pin-container' data-tip data-for={`image${imageId}`}>
               {hasGeoLocation && <div className='pin-wrapper'><img src={Pin} /></div>}
               <img src={url} alt={title}/>
           </li>
       </>
   )

};

export default Image;
