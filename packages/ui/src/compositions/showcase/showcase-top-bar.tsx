import * as React from 'react';

import {Container} from '../../primitives/layout';
import styles from './showcase.module.scss';
import type {NavItem} from './types';

export function ShowcaseTopBar({
    scrolled = false,
    brand,
    items,
    actions,
}: {
    scrolled?: boolean;
    brand: React.ReactNode;
    items?: NavItem[];
    actions?: React.ReactNode;
}) {
    return (
        <header className={styles.topBar} data-scrolled={scrolled}>
            <Container>
                <div className={styles.topBarInner}>
                    <div>{brand}</div>
                    {items && items.length > 0 ? (
                        <nav aria-label="Section navigation">
                            <ul className={styles.topBarNav}>
                                {items.map((item) => (
                                    <li key={item.href}>
                                        <a className={styles.topBarNavLink}
                                           href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ) : null}
                    <div className={styles.topBarActions}>{actions}</div>
                </div>
            </Container>
        </header>
    );
}

