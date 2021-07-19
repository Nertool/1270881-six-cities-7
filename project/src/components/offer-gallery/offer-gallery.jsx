import React from 'react';
import PropTypes from 'prop-types';

function OfferGallery({images}) {
  const imagesList = images.length > 6 ? images.slice(0, 6) : images;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">

        { imagesList.map((imgSrc) => {
          return (
            <div key={imgSrc} className="property__image-wrapper">
              <img className="property__image" src={ imgSrc } alt="Studio"/>
            </div>
          );
        })}

      </div>
    </div>
  );
}

OfferGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default OfferGallery;
