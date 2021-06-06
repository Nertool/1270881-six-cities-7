import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

function NearPlaces({hotels}) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">

          {hotels.map((hotel) => <Card key={hotel.id} hotel={hotel}/>)}

        </div>
      </section>
    </div>
  );
}

NearPlaces.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
      previewImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })).isRequired};

export default NearPlaces;
