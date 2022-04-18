import React from 'react';
import { Content } from '../components/Content/Content';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';

export function Poi(_props: any): JSX.Element {
  const { poiId } = useParams<{ poiId: string }>();
  return (
    <>
      <Button to="../" icon="ri-arrow-left-s-line" type="tonal">
        zurück
      </Button>
      <Content contentKey={`poi/${poiId}/description`} />
    </>
  );
}
