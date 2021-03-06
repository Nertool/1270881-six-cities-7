import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);
  const [layer, setLayer] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null && city) {
      const instance = leaflet.map(mapRef.current, {
        center: [city.latitude, city.longitude],
        zoom: city.zoom,
        zoomControl: false,
        marker: true,
      });

      const layerGroup = leaflet.layerGroup().addTo(instance);

      setLayer(layerGroup);

      instance.setView([city.latitude, city.longitude], city.zoom);

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return {map, layer};
}

export default useMap;
