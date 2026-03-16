import * as React from 'react';
import {cn} from '../../lib/utils';
import styles from './native-select.module.scss';

export interface NativeSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
}

export const NativeSelect = React.forwardRef<
    HTMLSelectElement,
    NativeSelectProps
>(({className, children, ...props}, ref) => {
    return (
        <select
            ref={ref}
            className={cn(styles.select, className)}
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.625rem center',
            }}
            {...props}
        >
            {children}
        </select>
    );
});

NativeSelect.displayName = 'NativeSelect';
