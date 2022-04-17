import React from 'react';
import { MaxWidthWrapper } from '../components/MaxWidthWrapper/MaxWidthWrapper';
import { Content } from '../components/Content/Content';

export function ImprintPage(_props: any): JSX.Element {
  return (
    <MaxWidthWrapper>
      <Content contentKey="pages/imprint" />
    </MaxWidthWrapper>
  );
}