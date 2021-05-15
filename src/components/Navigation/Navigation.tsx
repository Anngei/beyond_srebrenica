import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation(_props: any): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.logo}>
        Beyond Srebrenica
      </Link>
      <section className={styles.links}>
        <Link to="/about-us">
          Über uns
        </Link>
      </section>
    </nav>
  );
}
