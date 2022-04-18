import styles from './Card.module.css';
import { Button } from '../Button/Button';
import React from 'react';

export function Card({
  headline,
  text,
  action,
  actionLink,
}: {
  headline: string | JSX.Element;
  text: string | JSX.Element;
  action: string;
  actionLink: string;
}): JSX.Element {
  return (
    <div className={styles.contentCard}>
      <div className={styles.cardHeadline} style={{ borderRadius: '1.2rem' }}>
        {headline}
      </div>
      <div className={styles.cardText}>{text}</div>
      <div className={styles.cardAction}>
        <Button to={actionLink}>{action}</Button>
      </div>
    </div>
  );
}
