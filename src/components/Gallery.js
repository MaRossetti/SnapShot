import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm ? image.farm : undefined;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      let imgLat = image.lat ? image.lat : undefined;
      let imgLong = image.long ? image.long : undefined;
      let imgLocality = image.locality ? image.locality : undefined;
      let imgCountry = image.country ? image.country : undefined;
      return <Image url={url} key={id} imageId={id} alt={title} lat={imgLat} long={imgLong} country={imgCountry} locality={imgLocality} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
