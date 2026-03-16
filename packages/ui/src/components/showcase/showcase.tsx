import * as React from 'react';

import {cn} from '../../lib/utils';
import {Button} from '../button';
import {Container, Heading, Surface, Text} from '../layout';
import {Separator} from '../separator';
import styles from './showcase.module.scss';

type NavItem = {
    href: string
    label: string
}

function ShowcaseTopBar({
                            scrolled = false,
                            brand,
                            items,
                            actions,
                        }: {
    scrolled?: boolean
    brand: React.ReactNode
    items?: NavItem[]
    actions?: React.ReactNode
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

function ShowcaseBrand({href = '/', name, accent}: {
    href?: string;
    name: string;
    accent?: string
}) {
    return (
        <a href={href} className={styles.topBarBrand}>
            {accent ? <span
                className={styles.topBarBrandAccent}>{accent}</span> : null}
            <span>{accent ? ` ${name}` : name}</span>
        </a>
    );
}

function ShowcaseHero({
                          badge,
                          title,
                          highlight,
                          description,
                          primaryAction,
                          secondaryAction,
                          meta,
                      }: {
    badge?: React.ReactNode
    title: string
    highlight?: string
    description: React.ReactNode
    primaryAction?: React.ReactNode
    secondaryAction?: React.ReactNode
    meta?: React.ReactNode[]
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
                    {highlight ? <span
                        className={styles.heroHighlight}>{highlight}</span> : null}
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
                {meta && meta.length > 0 ?
                    <div className={styles.heroMeta}>{meta}</div> : null}
            </div>
        </section>
    );
}

function ShowcaseHeroPrimaryAction({
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

function ShowcaseHeroSecondaryAction({
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

function ShowcaseSection({
                             id,
                             title,
                             description,
                             children,
                         }: {
    id: string
    title: string
    description?: React.ReactNode
    children: React.ReactNode
}) {
    return (
        <section id={id} className={styles.section}>
            <header className={styles.sectionHeader}>
                <Heading as="h2" size="3xl">{title}</Heading>
                {description ? (
                    <Text as="p" tone="muted" size="md"
                          className={styles.sectionDescription}>
                        {description}
                    </Text>
                ) : null}
            </header>
            <Separator className={styles.sectionDivider}/>
            <div className={styles.sectionContent}>{children}</div>
        </section>
    );
}

function ShowcaseBlock({
                           title,
                           description,
                           children,
                       }: {
    title: string
    description?: React.ReactNode
    children: React.ReactNode
}) {
    return (
        <article className={styles.block}>
            <header className={styles.blockHeader}>
                <Heading as="h3" size="lg" weight="semibold">{title}</Heading>
                {description ? <Text as="p" size="sm"
                                     tone="muted">{description}</Text> : null}
            </header>
            <Surface className={styles.blockSurface}>{children}</Surface>
        </article>
    );
}

export {
    ShowcaseTopBar,
    ShowcaseBrand,
    ShowcaseHero,
    ShowcaseHeroPrimaryAction,
    ShowcaseHeroSecondaryAction,
    ShowcaseSection,
    ShowcaseBlock,
};

