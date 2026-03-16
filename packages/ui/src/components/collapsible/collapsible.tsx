'use client';

import {Collapsible as CollapsiblePrimitive} from '@base-ui/react/collapsible';

import {cn} from '../../lib/utils';
import styles from './collapsible.module.scss';

export function Collapsible({
                                className,
                                ...props
                            }: CollapsiblePrimitive.Root.Props) {
    return (
        <CollapsiblePrimitive.Root
            data-slot="collapsible"
            className={cn(styles.collapsible, className)}
            {...props}
        />
    );
}

export function CollapsibleTrigger({
                                       className,
                                       ...props
                                   }: CollapsiblePrimitive.Trigger.Props) {
    return (
        <CollapsiblePrimitive.Trigger
            data-slot="collapsible-trigger"
            className={cn(styles.trigger, className)}
            {...props}
        />
    );
}

export function CollapsibleContent({
                                       className,
                                       ...props
                                   }: CollapsiblePrimitive.Panel.Props) {
    return (
        <CollapsiblePrimitive.Panel
            data-slot="collapsible-content"
            className={cn(styles.content, className)}
            {...props}
        />
    );
}

