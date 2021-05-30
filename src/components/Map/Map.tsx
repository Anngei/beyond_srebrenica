import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Link } from 'react-router-dom';
import style from './Map.module.css';

export function Map(_props: any): JSX.Element {
  const berlinCenter: LatLngExpression = [52.5207797, 13.4056501];
  const ikbCoordinate: LatLngExpression = [52.5006981, 13.4188505]; // Laden von  https://raw.githubusercontent.com/Anngei/beyond_srebrenica/main/content/poi/ikb-berlin/coordinate.txt
  const ikbShortInfo =
    '**Islamisches Kulturzentrum der Bosniaken in Berlin e.V.**\n' +
    '\n' +
    'Adalbertstraße 94\n' +
    '<br />10999 Berlin\n' +
    '\n' +
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n'; // Laden von https://raw.githubusercontent.com/Anngei/beyond_srebrenica/main/content/poi/ikb-berlin/short-info-place.md

  return (
    <MapContainer center={berlinCenter} zoom={13} className={style.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={ikbCoordinate}>
        <Popup>
          {ikbShortInfo}
          <p>
            <Link to="/poi/ikb-berlin">mehr dazu</Link>
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
