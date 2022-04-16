import { MaxWidthWrapper } from '../components/MaxWidthWrapper/MaxWidthWrapper';
import { Content } from '../components/Content/Content';
import React from 'react';

export function AboutUs(_props: any): JSX.Element {
  return (
    <MaxWidthWrapper>
      <Content contentKey="pages/about-us" />
    </MaxWidthWrapper>
  );
}
