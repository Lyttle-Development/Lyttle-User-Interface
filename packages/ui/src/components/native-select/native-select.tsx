import * as React from 'react';
import {cn} from '../../lib/utils';
import styles from './native-select.module.scss';

export interface NativeSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
}

export const NativeSelect = React.forwardRef<
    HTMLSelectElement,
    NativeSelectProps
>(({className, children, onChange, value, defaultValue, ...props}, ref) => {
    const internalRef = React.useRef<HTMLSelectElement | null>(null);
    const [hasPlaceholder, setHasPlaceholder] = React.useState(() => {
        if (value != null) {
            return String(value) === '';
        }

        if (defaultValue != null) {
            return String(defaultValue) === '';
        }

        return true;
    });

    React.useEffect(() => {
        if (value != null) {
            setHasPlaceholder(String(value) === '');
            return;
        }

        if (internalRef.current) {
            setHasPlaceholder(internalRef.current.value === '');
        }
    }, [value, children]);

    return (
        <select
            ref={(node) => {
                internalRef.current = node;

                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            }}
            className={cn(styles.select, className)}
            data-placeholder={hasPlaceholder ? 'true' : undefined}
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.625rem center',
            }}
            value={value}
            defaultValue={defaultValue}
            onChange={(event) => {
                setHasPlaceholder(event.currentTarget.value === '');
                onChange?.(event);
            }}
            {...props}
        >
            {children}
        </select>
    );
});

NativeSelect.displayName = 'NativeSelect';
