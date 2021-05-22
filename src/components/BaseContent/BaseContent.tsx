import React, { useEffect, useState } from 'react';
import { getContent } from '../../content/client';
import { logger } from '../../logger';

export function BaseContent({ content }: { content: string }): JSX.Element {
  const [html, setHtml] = useState('');
  useEffect(() => {
    getContent(content)
      .then(setHtml)
      .catch((error) => {
        logger.error('Error trying to fetch content', error);
        setHtml('Was not able to get content');
      });
  }, [content]);

  return <>{html}</>;
}
