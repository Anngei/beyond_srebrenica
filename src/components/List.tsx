import React from 'react';
import { Link } from 'react-router-dom';
import styles from './List.module.css';
import { Content } from './Content/Content';

function renderReport(report: string): JSX.Element {
  return (
    <>
      <section className={styles.itemHeading}>
        <Content contentKey={`/reportagen/${report}/name`} />
      </section>
      <section className={styles.itemIntro}>
        <Content contentKey={`/reportagen/${report}/intro`} />
      </section>
      <section className={styles.itemLink}>
        <Link to={`/reportage/${report}`}>weiterlesen &#5171;</Link>
      </section>
    </>
  );
}

export function List({ reports }: { reports: string[] }): JSX.Element {
  return <section>{reports.map(renderReport)}</section>;
}
