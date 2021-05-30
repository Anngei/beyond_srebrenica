import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import style from './Map.module.css';
import { Poi } from './Poi';

export function Map({ poi }: { poi: string[] }): JSX.Element {
  const berlinCenter: LatLngExpression = [52.5207797, 13.4056501];
  const renderPoi: (poiId: string) => JSX.Element = (poiId: string) => (
    <Poi _id={poiId} />
  );

  return (
    <MapContainer center={berlinCenter} zoom={13} className={style.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {poi.map(renderPoi)}
    </MapContainer>
  );
}
