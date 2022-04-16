import React from 'react';
import { MaxWidthWrapper } from '../components/MaxWidthWrapper/MaxWidthWrapper';
import { Accordion } from '../components/Accordion/Accordion';

export function Background(_props: any): JSX.Element {
  return (
    <MaxWidthWrapper>
      <h1>Hintergrund</h1>
      <Accordion
        elements={{
          genocide: 'Begriff Völkermord',
          verlauf_bosnienkrieg: 'Verlauf des Bosnienkrieges',
          lawsuit: 'Gerichtsverfahren',
          migration: 'Migration aus (Post-) Jugoslawien',
          duldung: 'Duldung',
          gedenken: 'Wichtige Gedenktage',
        }}
      />
    </MaxWidthWrapper>
  );
}
