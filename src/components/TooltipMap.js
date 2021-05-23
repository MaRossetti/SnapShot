import React, {useState, useEffect} from "react";
import axios from "axios";
import {apiKey} from "../api/config";
import Map from "./Map";

export const TooltipMap = ({imageId, imageSecret, setHasGeoLocation}) => {
    const [loading, setLoading] = useState(false);
    const [imageCoordinates, setImageCoordinates] = useState({});

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=${apiKey}&photo_id=${imageId}&secret=${imageSecret}&format=json&nojsoncallback=1`
            )
            .then(res => {
                if(res.data.photo){
                    setHasGeoLocation(true);
                    const coordinates = {
                        lat : res.data.photo.location.latitude,
                        long : res.data.photo.location.longitude,
                        locality: res.data.photo.location.locality._content,
                    }
                    setImageCoordinates(coordinates);
                }
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                );
            });
    }, []);

    const renderComponent = () => {
        if(imageCoordinates.lat){
            return <Map lat={imageCoordinates.lat} long={imageCoordinates.long} />
        }

        return null;
    }

    return (
        <>
            {renderComponent()}
        </>
    )
}