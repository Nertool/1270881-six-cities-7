import React from 'react';
import PropTypes from 'prop-types';

function MainMap(props) {

  const { cardLocation } =  props;

  return (
    <div className="cities__right-section">
      <div>{ `latitude: ${cardLocation.latitude || 0}, longitude: ${cardLocation.longitude || 0}, zoom: ${cardLocation.zoom || 0}`}</div>
      <section className="cities__map map">
      </section>
    </div>
  );
}

MainMap.propTypes = {
  cardLocation: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }).isRequired,
};

export default MainMap;
