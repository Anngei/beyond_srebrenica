import React from 'react';
import { Content } from '../Content/Content';
import { Button } from '../Button/Button';
import styles from './Card.module.css';

export function ReportageCard({
  reportage,
}: {
  reportage: string;
}): JSX.Element {
  return (
    <div className={styles.contentCard}>
      <div className={styles.cardHeadline} style={{ borderRadius: '1.2rem' }}>
        <Content contentKey={`/reportagen/${reportage}/name`} />
      </div>
      <div className={styles.cardText}>
        <Content contentKey={`/reportagen/${reportage}/intro`} />
      </div>
      <div className={styles.cardAction}>
        <Button to={`/reportage/${reportage}`}>weiterlesen</Button>
      </div>
    </div>
  );
}
