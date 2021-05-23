import React from "react";
import GoogleMapReact from 'google-map-react';
import Pin from '../img/pin.png'

const Map = ({lat, long}) => {
    const mapProps = {
        center: {
            lat: parseFloat(lat),
            lng: parseFloat(long),
        },
        zoom: 11
    };

    return (
        <div style={{ height: '300px', width: '300px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBpSOv4lvaP5p5r0-G39YNOIwzm3KaH_NE' }}
                defaultCenter={mapProps.center}
                defaultZoom={mapProps.zoom}
                options={{fullscreenControl: false, zoomControl : false, scaleControl: false, rotateControl: false, mapTypeControl: false, streetViewControl:false}}
            >
            </GoogleMapReact>
        </div>
    );
}

export default React.memo(Map)