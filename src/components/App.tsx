import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Footer } from './Footer/Footer';
import styles from './App.module.css';

export function App(_props: any): JSX.Element {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
