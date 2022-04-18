import React from 'react';
import { Map } from '../Map/Map';
import { Button } from '../Button/Button';
import styles from './Card.module.css';

export function MapCard({ poi }: { poi: string[] }): JSX.Element {
  return (
    <section>
      <Map
        poi={poi}
        style={{ borderRadius: '1.2rem 1.2rem 0 0', height: '35rem' }}
      />
      <div className={styles.cardHeadline}>
        Orte bosniakischen Lebens in Berlin
      </div>
      <div className={styles.cardText}>
        In Berlin gibt es einige Orte, an denen das bosniakische Leben
        stattfindet. Wir haben einige davon aufgesucht und stellen diese vor.
      </div>
      <div className={styles.cardAction}>
        <Button to="/poi">Entdecke mehr</Button>
      </div>
    </section>
  );
}
