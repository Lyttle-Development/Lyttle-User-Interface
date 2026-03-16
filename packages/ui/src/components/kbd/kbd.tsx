import * as React from 'react';
import {cn} from '../../lib/utils';
import styles from './kbd.module.scss';

export function Kbd({
                        children,
                        className,
                    }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <kbd
            className={cn(
                styles.kbd,
                className,
            )}
        >
            {children}
        </kbd>
    );
}
