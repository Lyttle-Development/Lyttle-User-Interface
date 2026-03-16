import * as React from 'react';

import {cn} from '../../lib/utils';
import styles from './input-group.module.scss';

export function InputGroup({
                               children,
                               className,
                           }: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div data-slot="input-group" className={cn(styles.group, className)}>
            {children}
        </div>
    );
}

export function InputGroupAddon({
                                    children,
                                    className,
                                }: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <span
            data-slot="input-group-addon"
            className={cn(styles.addon, className)}
        >
      {children}
    </span>
    );
}

export function InputGroupText({
                                   children,
                                   className,
                               }: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <span
            data-slot="input-group-text"
            className={cn(styles.text, className)}
        >
      {children}
    </span>
    );
}

export function InputGroupInput({
                                    className,
                                    ...props
                                }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            data-slot="input-group-input"
            className={cn(styles.input, className)}
            {...props}
        />
    );
}
