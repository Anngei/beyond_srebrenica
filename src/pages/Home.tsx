import React from 'react';
import { Link } from 'react-router-dom';
import { MapCard } from '../components/Card/MapCard';
import { ReportageCard } from '../components/Card/ReportageCard';
import styles from './Home.module.css';

export function Home(_props: any): JSX.Element {
  return (
    <>
      <section className={styles.intro}>
        <p className={styles.introTitle}>
          Kleines intro, Lorem ipsum dolor sit amet
        </p>
        Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </section>

      <MapCard
        poi={[
          'ikb-berlin',
          'suedost-ev',
          'rosenduft',
          'slawistik-institut',
          'balkanbeats',
        ]}
      />

      <section className={styles.reports}>
        <div className={styles.reportsTitle}>
          <h3>
            Reportagen <Link to="/reportage">weiterlesen</Link>
          </h3>
        </div>
        <ReportageCard reportage="krdzic" />
        <ReportageCard reportage="haye" />
      </section>
    </>
  );
}
