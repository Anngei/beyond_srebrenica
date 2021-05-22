import React, { useEffect, useState } from 'react';
import { logger } from '../../logger';
import { getContent } from './client';

export function Content({ content }: { content: string }): JSX.Element {
  const [html, setHtml] = useState('');
  useEffect(() => {
    getContent(content)
      .then(setHtml)
      .catch((error: any) => {
        logger.error('Error trying to fetch content', error);
        setHtml('Was not able to get content');
      });
  }, [content]);

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
