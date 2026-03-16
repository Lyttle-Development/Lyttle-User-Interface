import * as React from 'react';
import {cn} from '../../lib/utils';
import styles from './empty.module.scss';

export interface EmptyProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

function DefaultIcon() {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={styles.defaultIcon}
        >
            <circle cx="12" cy="12" r="10"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
    );
}

export function Empty({
                          title = 'Nothing here yet',
                          description,
                          icon,
                          children,
                          className,
                      }: EmptyProps) {
    return (
        <div
            className={cn(
                styles.empty,
                className,
            )}
            role="status"
            aria-live="polite"
        >
            <div className={styles.iconWrapper}>
                {icon ?? <DefaultIcon/>}
            </div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
            </div>
            {children && <div className={styles.actions}>{children}</div>}
        </div>
    );
}
