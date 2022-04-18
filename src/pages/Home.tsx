import React from 'react';
import { Link } from 'react-router-dom';
import { MapCard } from '../components/Card/MapCard';
import { ReportageCard } from '../components/Card/ReportageCard';
import styles from './Home.module.css';
import { Card } from '../components/Card/Card';

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

      <section className={styles.reports}>
        <div className={styles.reportsTitle}>
          <h3>
            Hintergrundinformationen <Link to="/background">weiterlesen</Link>
          </h3>
        </div>
        <Card
          headline="Der Begriff Völkermord"
          text="Völkermord wird auch als Genozid bezeichnet und stammt vom griechischen Wort für Herkunft (génos) und dem lateinischen Wort für morden (caedere) ab. Der Begriff wurde 1944 von dem Juristen Raphael Lemkin geprägt, der persönlich vom Genozid durch das NS-Regime betroffen war."
          actionLink="/background#genocide"
          action="weiterlesen"
        />
        <Card
          headline="Wichtige Gedenktage"
          text="Der 11. Juli ist der Gedenktag für die Opfer des Völkermordes in Srebrenica und markierte 1995 das Ende des Bosnienkrieges. Jährlich findet an dem Tag in der 2003 eröffneten Gedenkstätte für die Opfer des Genozids Potočari eine Trauerfeier statt."
          actionLink="/background#gedenken"
          action="weiterlesen"
        />
      </section>
    </>
  );
}
