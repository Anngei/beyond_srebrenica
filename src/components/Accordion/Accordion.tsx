import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Content } from '../Content/Content';
import styles from './Accordion.module.css';
import 'remixicon/fonts/remixicon.css';

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
          <i className="ri-arrow-up-s-line" />
        </div>
      </>
    );
  }
  return (
    <>
      <div>{title}</div>{' '}
      <div>
        <i className="ri-arrow-down-s-line" />
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
        <Content contentKey={`background/${contentKey}`} />
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
  const initialState = initialToggleState(elements);
  const [contentState, setContentState] = useState<Record<string, boolean>>({
    ...initialState,
  });
  const { hash } = useLocation();
  useEffect(() => {
    const itemKey = hash.replace('#', '');
    const state = initialToggleState(elements);
    if (hash && state[itemKey] != undefined) {
      setContentState({ ...state, [itemKey]: true });
    }
  }, [hash, elements]);

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
