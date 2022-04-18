import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

function renderIcon(icon: string | undefined): JSX.Element {
  if (!icon) {
    return <></>;
  }
  return <i className={icon} style={{paddingRight: "0.8rem"}} />;
}

export function Button({
  to,
  type,
  icon,
  children,
}: {
  to: string;
  type?: 'filled' | 'tonal';
  icon?: string;
  children?: string;
}): JSX.Element {
  const typeClass = type == 'tonal' ? styles.tonal : styles.filled;
  const iconClass = icon ? styles.withIcon : styles.withoutIcon;
  const content = icon ? <span className={styles.text}>{children}</span>: children

  return (
    <Link to={to} className={`${styles.button} ${typeClass} ${iconClass}`}>
      {renderIcon(icon)}
      {content}
    </Link>
  );
}
