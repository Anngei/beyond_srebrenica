import React from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.css';

export function List(_props: any): JSX.Element {
  return (
    <section>
      <section className={styles.itemHeading}>Nadira Musić</section>
      <section className={styles.itemIntro}>
        Nadira Music ist Slawistin und beschäftigt sich mit Sprachräumen in
        Südosteuropa. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam
      </section>
      <section className={styles.itemLink}>
        <Link to="/interview1">weiterlesen &#5171;</Link>
      </section>
    </section>
  );
}
