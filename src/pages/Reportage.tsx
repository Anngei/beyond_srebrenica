import React from 'react';
import { Content } from '../components/Content/Content';
import { List } from '../components/List';
import { useParams } from 'react-router-dom';

export function ReportagePage(_props: any): JSX.Element {
  return (
    <>
      <h1>Reportagen</h1>
      <List reports={['krdzic', 'haye', 'travljanin', 'music', 'halilovic']} />
    </>
  );
}

export function ReportageDetailPage(_props: any): JSX.Element {
  const { id } = useParams<{ id: string }>();
  return <Content contentKey={`reportagen/${id}/full`} />;
}
