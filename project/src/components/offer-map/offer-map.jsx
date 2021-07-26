import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

function OfferMap({ near, currentOfferLocation }) {
  const mapRef = useRef(null);
  const [isEnableScrollingMap, setIsEnableScrollingMap] = useState(true);
  const cityLocation = near.length ? near[0].city.location : null;
  const {map, layer} = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (near.length && map !== null) {
      if (isEnableScrollingMap) {
        map.scrollWheelZoom.disable();
        setIsEnableScrollingMap(false);
      }
      layer.clearLayers();
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
      near.forEach(({location}) => {
        leaflet.marker([location.latitude, location.longitude], {icon: defaultIcon}).addTo(layer);
      });
      leaflet.marker([currentOfferLocation.latitude, currentOfferLocation.longitude], {icon: activeIcon}).addTo(layer);
    }
  }, [map, near, layer]);

  return (
    <div className='container'>
      <section ref={mapRef} className="property__map map">
      </section>
    </div>
  );
}

OfferMap.propTypes = {
  near: PropTypes.arrayOf(OffersProp),
  currentOfferLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

export default OfferMap;
