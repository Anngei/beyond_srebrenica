import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { Content } from '../Content/Content';

function contentStyle(isShown: boolean): any {
  if (isShown) {
    return styles.content;
  }
  return styles.contentHidden;
}

function contentTestId(isShown: boolean): string {
  if (isShown) {
    return 'content';
  }
  return 'hidden-content';
}

function renderTitle(contentIsShown: boolean, title: string): JSX.Element {
  if (contentIsShown) {
    return (
      <>
        <div>{title}</div>{' '}
        <div>
          <i className="fas fa-chevron-up" />
        </div>
      </>
    );
  }
  return (
    <>
      <div>{title}</div>{' '}
      <div>
        <i className="fas fa-chevron-down" />
      </div>
    </>
  );
}

function renderTerm(
  contentState: Record<string, boolean>,
  toggleStateFn: (key: string) => any
): ([contentKey, title]: [string, string]) => JSX.Element {
  return ([contentKey, title]: [string, string]) => (
    <div className={styles.term} key={contentKey}>
      <div
        aria-hidden="true"
        onClick={() => toggleStateFn(contentKey)}
        className={styles.title}
      >
        {renderTitle(contentState[contentKey], title)}
      </div>
      <div
        className={contentStyle(contentState[contentKey])}
        data-testid={contentTestId(contentState[contentKey])}
      >
        <Content contentKey={contentKey} />
      </div>
    </div>
  );
}

export function initialToggleState(
  elements: Record<string, string>
): Record<string, boolean> {
  const elementEntriesWithFalse = Object.entries(elements).map(
    ([key, _value]) => [key, false]
  );
  return Object.fromEntries(elementEntriesWithFalse);
}

function toggleContentState(
  contentState: Record<string, boolean>,
  setContentState: any
): (key: string) => any {
  return (key: string) => {
    setContentState({ ...contentState, [key]: !contentState[key] });
  };
}

export function Accordion({
  elements,
}: {
  elements: Record<string, string>;
}): JSX.Element {
  const [contentState, setContentState] = useState<Record<string, boolean>>(
    initialToggleState(elements)
  );

  return (
    <section className={styles.accordion}>
      {Object.entries(elements).map(
        renderTerm(
          contentState,
          toggleContentState(contentState, setContentState)
        )
      )}
    </section>
  );
}
