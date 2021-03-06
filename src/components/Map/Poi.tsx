import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { getPoi, PointOfInterest } from './service';
import { logger } from '../../logger';

function formatShortInfo(poi: PointOfInterest): string {
  return `<b>${poi.name}</b><p>${poi.address.street}<br />${poi.address.zip} ${poi.address.city}</p>`;
}

export function Poi({ id }: { id: string }): JSX.Element {
  const [poiState, setPoiState] = useState<PointOfInterest | null>(null);
  useEffect(() => {
    const cacheHit = localStorage.getItem(id);
    if (cacheHit) {
      setPoiState(JSON.parse(cacheHit));
      logger.debug(`Cache hit for ${id}`);
    } else {
      getPoi(id)
        .then((poi) => {
          localStorage.setItem(id, JSON.stringify(poi));
          return poi;
        })
        .then(setPoiState)
        .catch(logger.error);
    }
  }, [id]);

  if (poiState === null) {
    return <></>;
  }
  return (
    <Marker position={poiState.coordinate}>
      <Popup>
        <span dangerouslySetInnerHTML={{ __html: formatShortInfo(poiState) }} />
        <p>
          <Link to={`/poi/${id}`}>mehr dazu</Link>
        </p>
      </Popup>
    </Marker>
  );
}
