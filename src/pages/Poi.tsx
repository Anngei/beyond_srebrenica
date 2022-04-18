import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { getPoi, PointOfInterest } from '../components/Map/service';
import { ReportageCard } from '../components/Card/ReportageCard';
import { logger } from '../logger';
import styles from './Home.module.css';

function renderReports(reports: string[]): JSX.Element {
  if (reports.length < 1) {
    return <>Bald wird es zu diesem Ort eine Reportage geben.</>;
  }

  return (
    <>
      {reports.map((reportage) => (
        <ReportageCard key={reportage} reportage={reportage} />
      ))}
    </>
  );
}

export function Poi(_props: any): JSX.Element {
  const { poiId } = useParams<{ poiId: string }>();
  const [poiState, setPoiState] = useState<PointOfInterest | null>(null);
  useEffect(() => {
    if (poiId) {
      const cacheHit = localStorage.getItem(poiId);
      if (cacheHit) {
        setPoiState(JSON.parse(cacheHit));
        logger.debug(`Cache hit for ${poiId}`);
      } else {
        getPoi(poiId)
          .then((poi) => {
            localStorage.setItem(poiId, JSON.stringify(poi));
            return poi;
          })
          .then(setPoiState)
          .catch(logger.error);
      }
    }
  }, [poiId]);

  if (!poiState) {
    return <></>;
  }

  return (
    <>
      <Button to="../" icon="ri-arrow-left-s-line" type="tonal">
        zurück
      </Button>
      <h1>{poiState.name}</h1>
      {poiState.address.street}
      <br />
      {`${poiState.address.zip} ${poiState.address.city}`}
      <section className={styles.reports}>
        <h2 style={{ width: '100%' }}>Reportagen</h2>
        {renderReports(poiState.linkedReportage)}
      </section>
    </>
  );
}
