import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../pages/offer/offer.prop';
import leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';

import useMap from "../../hooks/useMap";

function MainMap(props) {
  const { cardLocation, offersList } =  props;
  const locationList = offersList.map((offer) => offer.location);
  const cityLocation = offersList[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation)
  const defaultIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const activeIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  function checkSelectedMarker(location) {
    return location.latitude === cardLocation.latitude && location.longitude === cardLocation.longitude
  }

  useEffect(() => {
    if (map) {
      map.setView([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);

      locationList.map((location) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude
          }, {
            icon: checkSelectedMarker(location) ? activeIcon : defaultIcon
          })
          .addTo(map);
      })
    }
  }, [map, cityLocation, cardLocation]);

  return (
    <div className="cities__right-section">
      <section ref={mapRef} className="cities__map map" style={{ height: '100%' }}>
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
  offersList: PropTypes.arrayOf(OffersProp),
};

export default MainMap;
