import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import OffersProp from '../../offer.prop';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function OfferMap({ near }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, near[0].city.location);
  const [isEnableScrollingMap, setIsEnableScrollingMap] = useState(true);
  const defaultIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      if (isEnableScrollingMap) {
        map.scrollWheelZoom.disable();
        setIsEnableScrollingMap(false);
      }

      near.map((item) => {
        leaflet
          .marker({
            lat: item.location.latitude,
            lng: item.location.longitude,
          }, {
            icon: defaultIcon,
          })
          .addTo(map);
      });

    }
  }, [map]);

  return (
    <div className='container'>
      <section ref={mapRef} className="property__map map">
      </section>
    </div>
  );
}

OfferMap.propTypes = {
  near: PropTypes.arrayOf(OffersProp),
};

export default OfferMap;
