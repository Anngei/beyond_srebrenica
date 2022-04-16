import { MaxWidthWrapper } from '../components/MaxWidthWrapper/MaxWidthWrapper';
import { Content } from '../components/Content/Content';
import { List } from '../components/List';
import { useParams } from 'react-router-dom';
import React from 'react';

export function ReportagePage(_props: any): JSX.Element {
  return (
    <MaxWidthWrapper>
      <h1>Reportagen</h1>
      <List reports={['krdzic', 'haye', 'travljanin', 'music', 'halilovic']} />
    </MaxWidthWrapper>
  );
}

export function ReportageDetailPage(_props: any): JSX.Element {
  const { id } = useParams<{ id: string }>();
  return (
    <MaxWidthWrapper>
      <Content contentKey={`reportagen/${id}/full`} />
    </MaxWidthWrapper>
  );
}
