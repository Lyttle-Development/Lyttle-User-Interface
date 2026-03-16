import * as React from 'react';
import {cn} from '../../lib/utils';
import {cva, type VariantProps} from 'class-variance-authority';
import styles from './spinner.module.scss';

const spinnerVariants = cva(
    styles.spinner,
    {
        variants: {
            size: {
                sm: styles.sizeSm,
                default: styles.sizeDefault,
                lg: styles.sizeLg,
                xl: styles.sizeXl,
            },
        },
        defaultVariants: {
            size: 'default',
        },
    },
);

export interface SpinnerProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof spinnerVariants> {
}

export function Spinner({className, size, ...props}: SpinnerProps) {
    return (
        <span
            role="status"
            aria-label="Loading"
            className={cn(spinnerVariants({size}), className)}
            {...props}
        />
    );
}
