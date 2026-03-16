import * as React from 'react';

import {cn} from '../../lib/utils';
import {Label} from '../label';
import styles from './field.module.scss';

export interface FieldProps {
    label: string;
    htmlFor?: string;
    description?: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function Field({
                          label,
                          htmlFor,
                          description,
                          error,
                          required,
                          children,
                          className,
                      }: FieldProps) {
    const descId = description ? `${htmlFor}-desc` : undefined;
    const errId = error ? `${htmlFor}-err` : undefined;

    return (
        <div className={cn(styles.field, className)}>
            <Label htmlFor={htmlFor} className={styles.label}>
                <span>{label}</span>
                {required && (
                    <span className={styles.required} aria-hidden="true">
            *
          </span>
                )}
            </Label>
            {React.isValidElement(children)
                ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
                    'aria-describedby': [descId, errId].filter(Boolean).join(' ') || undefined,
                    'aria-invalid': error ? 'true' : undefined,
                })
                : children}
            {description && !error && (
                <p id={descId} className={styles.description}>
                    {description}
                </p>
            )}
            {error && (
                <p id={errId} className={styles.error} role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
