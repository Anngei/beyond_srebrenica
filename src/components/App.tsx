import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Footer } from './Footer/Footer';

export function App(_props: any): JSX.Element {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
