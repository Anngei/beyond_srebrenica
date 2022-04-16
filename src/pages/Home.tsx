import React from 'react';
import { FullWidthWrapper } from '../components/FullWidthWrapper/FullWidthWrapper';
import { Map } from '../components/Map/Map';

export function Home(_props: any): JSX.Element {
  return (
    <FullWidthWrapper>
      <Map
        poi={[
          'ikb-berlin',
          'suedost-ev',
          'rosenduft',
          'slawistik-institut',
          'balkanbeats',
        ]}
      />
    </FullWidthWrapper>
  );
}
