import React, { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City, Point } from '../../types/map.ts';
import useMap from '../../hooks/useMap.tsx';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/marker.ts';

type MapProps = {
  city: City;
  points: Point[];
  selectedPoint?: Point;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): React.ReactElement {
  const { city, points, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{ width: '100%' }} ref={mapRef}></div>;
}

export default Map;
