import React, { Dispatch, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './Navigation.module.css';
import 'remixicon/fonts/remixicon.css';

interface LinkType {
  name: string;
  link: string;
}

function renderLink(
  setIsOpen: Dispatch<boolean>,
  prefix: string
): (linkItem: LinkType, index: number, links: LinkType[]) => JSX.Element {
  return (linkItem: LinkType, index: number, links: LinkType[]) => {
    let customStyle = {};
    if (index + 1 == links.length) {
      customStyle = { marginRight: 0 };
    }
    const resolved = useResolvedPath(linkItem.link);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
      <Link
        to={linkItem.link}
        key={`${prefix}-${index}`}
        style={customStyle}
        className={match ? styles.activeLink : styles.link}
        onClick={() => setIsOpen(false)}
      >
        {linkItem.name}
      </Link>
    );
  };
}

function renderBurgerMenu(
  setIsOpen: Dispatch<boolean>,
  isOpen: boolean,
  links: LinkType[]
): JSX.Element {
  let className = `${styles.hamburgerMenu} ${styles.openedHamburgerMenu}`;
  if (!isOpen) {
    className = `${styles.hamburgerMenu}`;
  }
  return (
    <section className={className}>
      <div className={styles.closeMenu}>
        <i
          className="ri-close-line"
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: 'relative', left: '-0.5rem' }}
        />
      </div>
      {links.map(renderLink(setIsOpen, 'burger-menu'))}
    </section>
  );
}

function renderBurgerMenuIcon(
  setIsOpen: Dispatch<boolean>,
  isOpen: boolean
): JSX.Element {
  if (isOpen) {
    return <></>;
  }
  return (
    <button
      className={styles.hamburgerMenuIcon}
      onClick={() => setIsOpen(!isOpen)}
    >
      <i
        className="ri-menu-line"
        style={{ position: 'relative', top: '-0.2rem' }}
      />
    </button>
  );
}

export function Navigation(_props: any): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = [
    {
      name: 'Reportagen',
      link: '/reportage',
    },
    // {
    //   name: 'Orte',
    //   link: '/poi',
    // },
    {
      name: 'Hintergrund',
      link: '/background',
    },
  ];
  return (
    <nav className={styles.navigation}>
      <section className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          Beyond Srebrenica
        </Link>
        <section className={styles.links}>
          {links.map(renderLink(setIsOpen, 'navbar'))}
        </section>
        {renderBurgerMenuIcon(setIsOpen, isOpen)}
        {renderBurgerMenu(setIsOpen, isOpen, links)}
      </section>
    </nav>
  );
}
