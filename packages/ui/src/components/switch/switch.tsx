'use client';

import {Switch as SwitchPrimitive} from '@base-ui/react/switch';

import {cn} from '../../lib/utils';
import styles from './switch.module.scss';

function Switch({
                    className,
                    size = 'default',
                    ...props
                }: SwitchPrimitive.Root.Props & {
    size?: 'sm' | 'default'
}) {
    return (
        <SwitchPrimitive.Root
            data-slot="switch"
            data-size={size}
            data-motion-trigger
            className={cn(styles.switch, className)}
            {...props}
        >
            <SwitchPrimitive.Thumb
                data-slot="switch-thumb"
                className={styles.thumb}
            />
        </SwitchPrimitive.Root>
    );
}

export {Switch};

