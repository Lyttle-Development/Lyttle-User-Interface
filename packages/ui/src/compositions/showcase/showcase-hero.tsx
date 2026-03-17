import * as React from 'react';

import {Button} from '../../components/button';
import {cn} from '../../lib/utils';
import {Heading, Text} from '../../primitives/layout';
import styles from './showcase.module.scss';

export function ShowcaseHero({
    badge,
    title,
    highlight,
    description,
    primaryAction,
    secondaryAction,
    meta,
}: {
    badge?: React.ReactNode;
    title: string;
    highlight?: string;
    description: React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    meta?: React.ReactNode[];
}) {
    return (
        <section className={styles.hero}>
            <div
                aria-hidden="true"
                className={cn(styles.heroGlow, styles.heroGlowPrimary)}
                style={{background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)'}}
            />
            <div
                aria-hidden="true"
                className={cn(styles.heroGlow, styles.heroGlowAccent)}
                style={{background: 'radial-gradient(circle, #FF6363 0%, transparent 70%)'}}
            />
            <div className={styles.heroContent}>
                {badge}
                <Heading as="h1" size="6xl" className={styles.heroTitle}
                         tone="inverse">
                    {title}{' '}
                    {highlight ? <span className={styles.heroHighlight}>{highlight}</span> : null}
                </Heading>
                <Text as="p" size="xl" tone="inverse"
                      className={styles.heroDescription}>
                    {description}
                </Text>
                {primaryAction || secondaryAction ? (
                    <div className={styles.heroActions}>
                        {primaryAction}
                        {secondaryAction}
                    </div>
                ) : null}
                {meta && meta.length > 0 ? <div className={styles.heroMeta}>{meta}</div> : null}
            </div>
        </section>
    );
}

export function ShowcaseHeroPrimaryAction({
    href,
    children,
    ...props
}: React.ComponentPropsWithoutRef<'a'>) {
    return (
        <Button asChild variant="secondary" size="lg">
            <a href={href} {...props}>{children}</a>
        </Button>
    );
}

export function ShowcaseHeroSecondaryAction({
    href,
    children,
    ...props
}: React.ComponentPropsWithoutRef<'a'>) {
    return (
        <Button asChild variant="outline" size="lg">
            <a href={href} {...props}>{children}</a>
        </Button>
    );
}

