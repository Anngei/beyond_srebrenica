import React from 'react';
import style from './Home.module.css';
import { Map } from '../Map/Map';

export function Home(_props: any): JSX.Element {
  return (
    <div className={style.test}>
      <br />
      Hallo
      <div className={style.map}>
        <Map />
      </div>
    </div>
  );
}
