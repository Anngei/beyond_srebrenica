import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer(_props: any): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Link to="/about-us">Über uns</Link>
      <Link to="/imprint">Impressum</Link>
    </footer>
  );
}
