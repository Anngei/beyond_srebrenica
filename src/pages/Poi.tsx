import { MaxWidthWrapper } from '../components/MaxWidthWrapper/MaxWidthWrapper';
import { Content } from '../components/Content/Content';
import { useParams } from 'react-router-dom';
import React from 'react';

export function Poi(_props: any): JSX.Element {
  const { poiId } = useParams<{ poiId: string }>();
  return (
    <MaxWidthWrapper>
      <Content contentKey={`poi/${poiId}/description`} />
    </MaxWidthWrapper>
  );
}
