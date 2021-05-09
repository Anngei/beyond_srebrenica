import React from 'react';
import style from './Home.module.css';
import { Map } from './Map';

export function Home(_props: any): JSX.Element {
  return (
    <div className={style.test}>
      Hallo
      <div className={style.map}>
        <Map />
      </div>
    </div>
  );
}
