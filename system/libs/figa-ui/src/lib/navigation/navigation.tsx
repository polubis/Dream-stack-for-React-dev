import type { NavigationProps } from './defs';

import c from 'classnames';
import { Button } from '../button';
import { CloseIcon, HamburgerIcon } from '../icon';
import { useScrollHide, useToggle } from '@system/figa-hooks';
import { Subject } from 'rxjs';
import { useEffect } from 'react';

const ScrollHide = () => {
  useScrollHide();

  return null;
};

const openedAction = new Subject<boolean>();
const openedAction$ = openedAction.asObservable();

const Navigation = ({ className, logo, links, action }: NavigationProps) => {
  const toggler = useToggle();

  useEffect(() => {
    const sub = openedAction$.subscribe((opened) =>
      toggler.set({ opened, data: null })
    );

    return () => {
      sub.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {toggler.opened && <ScrollHide />}
      <nav className={c('navigation', className)}>
        <div className="navigation-logo">{logo}</div>
        <ul className="navigation-links">
          {links.map((link, idx) => (
            <li className="navigation-link" key={idx}>
              {link}
            </li>
          ))}
        </ul>
        <div className="navigation-action">{action}</div>
        <Button
          className="navigation-mobile-trigger"
          size={3}
          title="Open"
          shape="rounded"
          onClick={toggler.toggle}
        >
          <HamburgerIcon />
        </Button>
        <div className={c('navigation-mobile', { opened: toggler.opened })}>
          <header className="navigation-mobile-header">
            <Button
              className="navigation-mobile-close"
              size={3}
              title="Close"
              shape="rounded"
              onClick={toggler.close}
            >
              <CloseIcon />
            </Button>
          </header>
          <div className="navigation-mobile-links-wrapper">
            <ul className="navigation-mobile-links">
              {links.map((link, idx) => (
                <li className="navigation-mobile-link" key={idx}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <footer className="navigation-mobile-footer">{action}</footer>
        </div>
      </nav>
    </>
  );
};

Navigation.toggle = (opened: boolean): void => {
  openedAction.next(opened);
};

export { Navigation };
