import React from 'react';
import styles from './MaxWidthWrapper.module.css';

export function MaxWidthWrapper(props: any): JSX.Element {
  return <section className={styles.maxWidth}>{props.children}</section>;
}
