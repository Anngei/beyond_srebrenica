import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

export function Button(props: any): JSX.Element {
  const { to } = props;
  return (
    <Link to={to}>
      <button className={styles.button}>{props.children}</button>
    </Link>
  );
}
