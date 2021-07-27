import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

function MainMap(props) {
  const { cardLocation, offersList } =  props;
  const mapRef = useRef(null);
  const {map, layer} = useMap(mapRef, offersList[0].city.location);


  useEffect(() => {
    const cityLocation = offersList[0].city.location;
    const checkSelectedMarker = (location) => location.latitude === cardLocation.latitude && location.longitude === cardLocation.longitude;

    if (offersList.length && map !== null) {
      layer.clearLayers();
      map.setView([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);
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
      offersList.forEach(({location}) => {
        leaflet.marker([location.latitude, location.longitude], {icon: checkSelectedMarker(location) ? activeIcon : defaultIcon}).addTo(layer);
      });
    }
  }, [map, offersList, layer, cardLocation]);

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
