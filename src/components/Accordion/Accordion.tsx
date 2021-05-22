import React from 'react';
import styles from './Accordion.module.css';
import { Content } from '../Content/Content';

function Term({
  title,
  contentKey,
}: {
  title: string;
  contentKey: string;
}): JSX.Element {
  return (
    <div className={styles.term}>
      <div className={styles.title}>{title}</div>
      <div className={styles.contentHidden}>
        <Content contentKey={contentKey} />
      </div>
    </div>
  );
}

export function Accordion(_props: any): JSX.Element {
  // const contentState = {
  //   genocide: styles.contentHidden,
  //   lawsuit: styles.contentHidden,
  // };

  return (
    <section className={styles.accordion}>
      <Term title="Begriff Völkermord" contentKey="genocide" />
      <Term title="Gerichtsverfahren" contentKey="lawsuit" />
    </section>
  );
}
