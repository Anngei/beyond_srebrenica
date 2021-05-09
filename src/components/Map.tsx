import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import style from './Map.module.css';

export function Map(_props: any): JSX.Element {
  const defaultPosition: LatLngExpression = [48.864716, 2.349]; // Paris position

  return (
    <MapContainer center={defaultPosition} zoom={13} className={style.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
