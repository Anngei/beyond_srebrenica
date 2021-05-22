import React from 'react';
import styles from './FullWidthWrapper.module.css';

export function FullWidthWrapper(props: any): JSX.Element {
  return <section className={styles.fullWidth}>{props.children}</section>;
}
