import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultsHistory, setResultsHistory] = useState({});
  const runSearch = query => {
    if(!resultsHistory[query]){
      setLoading(true);
      axios
          .get(
              `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
          )
          .then(response => {
            return response.data.photos.photo
            })
          .then(res => {
              const promiseArr = res.map(image => {
                return axios
                    .get(
                        `https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=${apiKey}&photo_id=${image.id}&secret=${image.secret}&format=json&nojsoncallback=1`
                    )
                    .then(res => {
                      if(res.data.photo){
                        const imageWithCoords = {
                          ...image,
                          lat: res.data.photo.location.latitude,
                          long: res.data.photo.location.longitude,
                          locality: res.data.photo.location.locality._content,
                          country: res.data.photo.location.country._content,
                        }
                        return imageWithCoords
                      }else{
                        return image
                      }
                      setLoading(false);
                    })
                    .catch(error => {
                      console.log(
                          "Encountered an error with fetching and parsing data",
                          error
                      );
                    })
              })
              return Promise.all(promiseArr);
            })
          .then(res=> {
            setImages(res);
            const result = resultsHistory;
            result[query] = res;
            setResultsHistory(result);
            setLoading(false);
          })
          .catch(error => {
            console.log(
                "Encountered an error with fetching and parsing data",
                error
            );
          });
    }else{
      setImages(resultsHistory[query]);
    }

  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
