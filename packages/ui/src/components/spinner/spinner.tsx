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
            variant: {
                default: styles.variantDefault,
                current: styles.variantCurrent,
                white: styles.variantWhite,
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
    },
);

export interface SpinnerProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof spinnerVariants> {
}

export function Spinner({className, size, variant, ...props}: SpinnerProps) {
    return (
        <span
            data-slot="spinner"
            role="status"
            aria-label="Loading"
            className={cn(spinnerVariants({size, variant}), className)}
            {...props}
        />
    );
}
