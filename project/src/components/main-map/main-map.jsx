import React from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../pages/offer/offer.prop';

function MainMap(props) {
  const { cardLocation, offersList } =  props;
  const locationList = offersList.map((offer) => offer.location);

  return (
    <div>
      <div>
        <b>Location list</b>
        <div>{locationList.map((location, index) => {
          const keyValue = index + location.zoom;
          return (
            <div key={keyValue}><b>hotel:</b> {location.latitude}, {location.longitude}, {location.zoom}</div>
          );
        })}
        </div>
      </div>
      <br />
      <div>
        <b>Active hotel:</b>
        <div>{cardLocation.latitude}, {cardLocation.longitude}, {cardLocation.zoom}</div>
      </div>
      <div className="cities__right-section">
        <section className="cities__map map">
        </section>
      </div>
    </div>
  );
}

MainMap.propTypes = {
  cardLocation: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }).isRequired,
  offersList: PropTypes.arrayOf(OffersProp),
};

export default MainMap;
