import React from 'react';
import { Content } from '../components/Content/Content';
import { useParams } from 'react-router-dom';
import { ReportageCard } from '../components/Card/ReportageCard';
import styles from './Reportage.module.css';

function renderReportage(reportage: string): JSX.Element {
  return <ReportageCard reportage={reportage} />;
}

export function ReportagePage(_props: any): JSX.Element {
  const reports = ['krdzic', 'haye', 'travljanin', 'music', 'halilovic'];
  return (
    <>
      <h1>Reportagen</h1>
      <div className={styles.reports}>{reports.map(renderReportage)}</div>
    </>
  );
}

export function ReportageDetailPage(_props: any): JSX.Element {
  const { id } = useParams<{ id: string }>();
  return <Content contentKey={`reportagen/${id}/full`} />;
}
