import React, { CSSProperties } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Poi } from './Poi';
import styles from './Map.module.css';

export function Map({
  poi,
  style,
}: {
  poi: string[];
  style?: CSSProperties | undefined;
}): JSX.Element {
  const berlinCenter: LatLngExpression = [52.5170365, 13.3888599];
  const renderPoi: (poiId: string) => JSX.Element = (poiId: string) => (
    <Poi key={poiId} id={poiId} />
  );
  poi.map(renderPoi);

  return (
    <MapContainer
      center={berlinCenter}
      zoom={13}
      className={styles.map}
      style={style}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {poi.map(renderPoi)}
    </MapContainer>
  );
}
