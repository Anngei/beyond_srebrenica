import React from 'react';
import { Map } from '../components/Map/Map';
import { Content } from '../components/Content/Content';
import { Button } from '../components/Button/Button';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

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

      <section>
        <Map
          poi={[
            'ikb-berlin',
            'suedost-ev',
            'rosenduft',
            'slawistik-institut',
            'balkanbeats',
          ]}
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

      <section className={styles.reports}>
        <div className={styles.reportsTitle}>
          <h3>
            Reportagen <Link to="/reportage">weiterlesen</Link>
          </h3>
        </div>
        <div className={styles.contentCard}>
          <div
            className={styles.cardHeadline}
            style={{ borderRadius: '1.2rem' }}
          >
            <Content contentKey={`/reportagen/krdzic/name`} />
          </div>
          <div className={styles.cardText}>
            <Content contentKey={`/reportagen/krdzic/intro`} />
          </div>
          <div className={styles.cardAction}>
            <Button to="reportage/krdzic">weiterlesen</Button>
          </div>
        </div>
        <div className={styles.contentCard}>
          <div
            className={styles.cardHeadline}
            style={{ borderRadius: '1.2rem' }}
          >
            <Content contentKey={`/reportagen/haye/name`} />
          </div>
          <div className={styles.cardText}>
            <Content contentKey={`/reportagen/haye/intro`} />
          </div>
          <div className={styles.cardAction}>
            <Button to="reportage/haye">weiterlesen</Button>
          </div>
        </div>
      </section>
    </>
  );
}
