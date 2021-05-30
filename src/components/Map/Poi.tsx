import React from 'react';
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { LatLngExpression } from "leaflet";

export function Poi({ _id }: { _id: string }): JSX.Element {
  const ikbCoordinate: LatLngExpression = [52.5006981, 13.4188505]; // Laden von  https://raw.githubusercontent.com/Anngei/beyond_srebrenica/main/content/poi/ikb-berlin/coordinate.txt
  const ikbShortInfo =
    '**Islamisches Kulturzentrum der Bosniaken in Berlin e.V.**\n' +
    '\n' +
    'Adalbertstraße 94\n' +
    '<br />10999 Berlin\n' +
    '\n' +
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n'; // Laden von https://raw.githubusercontent.com/Anngei/beyond_srebrenica/main/content/poi/ikb-berlin/short-info-place.md

  return (
    <Marker position={ikbCoordinate}>
    <Popup>
      {ikbShortInfo}
      <p>
        <Link to="/poi/ikb-berlin">mehr dazu</Link>
      </p>
    </Popup>
  </Marker>
  );
}
