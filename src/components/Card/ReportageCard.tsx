import React from 'react';
import { Content } from '../Content/Content';
import { Card } from './Card';

export function ReportageCard({
  reportage,
}: {
  reportage: string;
}): JSX.Element {
  return (
    <Card
      headline={<Content contentKey={`/reportagen/${reportage}/name`} />}
      text={<Content contentKey={`/reportagen/${reportage}/intro`} />}
      actionLink={`/reportage/${reportage}`}
      action="weiterlesen"
    />
  );
}
