import * as React from 'react';

import {Separator} from '../../components/separator';
import {Heading, Surface, Text} from '../../primitives/layout';
import styles from './showcase.module.scss';

export function ShowcaseSection({
    id,
    title,
    description,
    children,
}: {
    id: string;
    title: string;
    description?: React.ReactNode;
    children: React.ReactNode;
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

export function ShowcaseBlock({
    title,
    description,
    children,
}: {
    title: string;
    description?: React.ReactNode;
    children: React.ReactNode;
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

