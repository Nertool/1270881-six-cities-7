import React from 'react';
import PropTypes from 'prop-types';

function OfferGallery({images}) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">

        { images.map((imgSrc, index) => {
          if (index < 6) {
            return (
              <div key={imgSrc} className="property__image-wrapper">
                <img className="property__image" src={ imgSrc } alt="Studio"/>
              </div>
            );
          }
        }) }

      </div>
    </div>
  );
}

OfferGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default OfferGallery;
