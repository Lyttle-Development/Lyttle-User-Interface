import * as React from 'react';
import {cn} from '../../lib/utils';
import styles from './button-group.module.scss';

export function ButtonGroup({
                                children,
                                className,
                            }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            role="group"
            className={cn(
                styles.group,
                className,
            )}
        >
            {children}
        </div>
    );
}
