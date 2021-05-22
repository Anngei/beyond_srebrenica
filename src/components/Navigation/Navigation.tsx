import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation(_props: any): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <section className={styles.ghostShark}>
        <Link to="/" className={styles.logo}>
          Beyond Srebrenica
        </Link>
        <section className={styles.links}>
          <Link to="/map">Karte</Link>
          <Link to="/background">Hintergrund</Link>
          <Link to="/texts">Texte</Link>
          <Link to="/about-us">Über uns</Link>
          <Link to="/imprint">Impressum</Link>
        </section>
      </section>
    </nav>
  );
}
