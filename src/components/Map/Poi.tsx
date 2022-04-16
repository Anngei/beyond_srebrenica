import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { getPoi, PointOfInterest } from './service';
import { logger } from '../../logger';

export function Poi({ id }: { id: string }): JSX.Element {
  const [poiState, setPoiState] = useState<PointOfInterest | null>(null);
  useEffect(() => {
    getPoi(id).then(setPoiState).catch(logger.error);
  }, [id]);

  if (poiState === null) {
    return <></>;
  }
  return (
    <Marker position={poiState.coordinate}>
      <Popup>
        <span dangerouslySetInnerHTML={{ __html: poiState.shortInfo }} />
        <p>
          <Link to={`/poi/${id}`}>mehr dazu</Link>
        </p>
      </Popup>
    </Marker>
  );
}
