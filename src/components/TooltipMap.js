import React from "react";
import GoogleMapReact from 'google-map-react';
import {gmapsApiKey} from "../api/config";

export const TooltipMap = ({lat, long, locality, country}) => {

    const renderComponent = () => {
        if(lat && long){
            return (
                <div style={{ height: '300px', width: '300px' }}>
                    <h3>{locality} - {country}</h3>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: gmapsApiKey }}
                        defaultCenter={{
                            lat: parseFloat(lat),
                            lng: parseFloat(long),
                        }}
                        defaultZoom={12}
                        options={{fullscreenControl: false, zoomControl : false, scaleControl: false, rotateControl: false, mapTypeControl: false, streetViewControl:false}}
                    />
                </div>
            );
        }
        return null;
    }

    return (
        <>
            {renderComponent()}
        </>
    )
}