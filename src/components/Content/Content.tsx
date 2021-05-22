import React, { useEffect, useState } from 'react';
import { logger } from '../../logger';
import { getContent } from './client';

export function Content({ contentKey }: { contentKey: string }): JSX.Element {
  const [html, setHtml] = useState('');
  useEffect(() => {
    getContent(contentKey)
      .then(setHtml)
      .catch((error: any) => {
        logger.error('Error trying to fetch content', error);
        setHtml('Was not able to get content');
      });
  }, [contentKey]);

  return (
    <section
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
