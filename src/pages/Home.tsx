import React from 'react';
import { Map } from '../components/Map/Map';
import { MaxWidthWrapper } from '../components/MaxWidthWrapper/MaxWidthWrapper';
import styles from './home.module.css';
import { Content } from '../components/Content/Content';
import { Button } from '../components/Button/Button';

export function Home(_props: any): JSX.Element {
  return (
    <MaxWidthWrapper>
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
    </MaxWidthWrapper>
  );
}
