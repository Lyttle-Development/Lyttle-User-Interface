'use client';

import * as React from 'react';
import {Select as SelectPrimitive} from '@base-ui/react/select';
import {cva} from 'class-variance-authority';

import {
    composeRefs,
    floatingMotionRender,
    useInteractiveMotion
} from '../../lib/motion';
import {cn} from '../../lib/utils';
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from 'lucide-react';
import styles from './select.module.scss';

function Select<Value, Multiple extends boolean | undefined = false>({
                                                                         modal = false,
                                                                         ...props
                                                                     }: SelectPrimitive.Root.Props<Value, Multiple>) {
    return <SelectPrimitive.Root modal={modal} {...props} />;
}

const selectTriggerVariants = cva(styles.trigger, {
    variants: {
        size: {
            default: styles.triggerDefault,
            sm: styles.triggerSm,
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

function SelectGroup({className, ...props}: SelectPrimitive.Group.Props) {
    return (
        <SelectPrimitive.Group
            data-slot="select-group"
            className={cn(styles.group, className)}
            {...props}
        />
    );
}

function SelectValue({className, ...props}: SelectPrimitive.Value.Props) {
    return (
        <SelectPrimitive.Value
            data-slot="select-value"
            className={cn(styles.value, className)}
            {...props}
        />
    );
}

const SelectTrigger = React.forwardRef<
    HTMLButtonElement,
    SelectPrimitive.Trigger.Props & {
    size?: 'sm' | 'default'
}
>(function SelectTrigger({
                             className,
                             size = 'default',
                             children,
                             ...props
                         }, ref) {
    const motion = useInteractiveMotion<HTMLButtonElement>({disabled: true});
    const {
        onBlur,
        onFocus,
        onPointerCancel,
        onPointerDown,
        onPointerEnter,
        onPointerLeave,
        onPointerUp,
        ...triggerProps
    } = props;

    return (
        <SelectPrimitive.Trigger
            ref={composeRefs(ref, motion.ref)}
            type="button"
            data-slot="select-trigger"
            data-size={size}
            data-motion-trigger
            data-motion-managed="gsap"
            className={cn(selectTriggerVariants({size}), className)}
            onBlur={(event) => {
                onBlur?.(event);
                motion.handlers.onBlur?.(event);
            }}
            onFocus={(event) => {
                onFocus?.(event);
                motion.handlers.onFocus?.(event);
            }}
            onPointerCancel={(event) => {
                onPointerCancel?.(event);
                motion.handlers.onPointerCancel?.(event);
            }}
            onPointerDown={(event) => {
                onPointerDown?.(event);
                motion.handlers.onPointerDown?.(event);
            }}
            onPointerEnter={(event) => {
                onPointerEnter?.(event);
                motion.handlers.onPointerEnter?.(event);
            }}
            onPointerLeave={(event) => {
                onPointerLeave?.(event);
                motion.handlers.onPointerLeave?.(event);
            }}
            onPointerUp={(event) => {
                onPointerUp?.(event);
                motion.handlers.onPointerUp?.(event);
            }}
            {...triggerProps}
        >
            {children}
            <SelectPrimitive.Icon
                render={
                    <ChevronDownIcon className={styles.icon}/>
                }
            />
        </SelectPrimitive.Trigger>
    );
});

SelectTrigger.displayName = 'SelectTrigger';

function SelectContent({
                           className,
                           children,
                           side = 'bottom',
                           sideOffset = 4,
                           align = 'center',
                           alignOffset = 0,
                           alignItemWithTrigger = true,
                           ...props
                       }: SelectPrimitive.Popup.Props &
    Pick<
        SelectPrimitive.Positioner.Props,
        'align' | 'alignOffset' | 'side' | 'sideOffset' | 'alignItemWithTrigger'
    >) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Positioner
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                alignItemWithTrigger={alignItemWithTrigger}
                className={styles.positioner}
            >
                <SelectPrimitive.Popup
                    data-slot="select-content"
                    data-align-trigger={alignItemWithTrigger}
                    data-motion-floating
                    className={cn(styles.content, className)}
                    render={floatingMotionRender}
                    {...props}
                >
                    <SelectScrollUpButton/>
                    <SelectPrimitive.List>{children}</SelectPrimitive.List>
                    <SelectScrollDownButton/>
                </SelectPrimitive.Popup>
            </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
    );
}

function SelectLabel({
                         className,
                         ...props
                     }: SelectPrimitive.GroupLabel.Props) {
    return (
        <SelectPrimitive.GroupLabel
            data-slot="select-label"
            className={cn(styles.label, className)}
            {...props}
        />
    );
}

function SelectItem({
                        className,
                        children,
                        ...props
                    }: SelectPrimitive.Item.Props) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(styles.item, className)}
            {...props}
        >
            <SelectPrimitive.ItemText className={styles.itemText}>
                {children}
            </SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator
                render={
                    <span className={styles.itemIndicator}/>
                }
            >
                <CheckIcon className={styles.itemIndicatorIcon}/>
            </SelectPrimitive.ItemIndicator>
        </SelectPrimitive.Item>
    );
}

function SelectSeparator({
                             className,
                             ...props
                         }: SelectPrimitive.Separator.Props) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn(styles.separator, className)}
            {...props}
        />
    );
}

function SelectScrollUpButton({
                                  className,
                                  ...props
                              }: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
    return (
        <SelectPrimitive.ScrollUpArrow
            data-slot="select-scroll-up-button"
            className={cn(styles.scrollButton, styles.scrollUpButton, className)}
            {...props}
        >
            <ChevronUpIcon className={styles.scrollIcon}/>
        </SelectPrimitive.ScrollUpArrow>
    );
}

function SelectScrollDownButton({
                                    className,
                                    ...props
                                }: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
    return (
        <SelectPrimitive.ScrollDownArrow
            data-slot="select-scroll-down-button"
            className={cn(styles.scrollButton, styles.scrollDownButton, className)}
            {...props}
        >
            <ChevronDownIcon className={styles.scrollIcon}/>
        </SelectPrimitive.ScrollDownArrow>
    );
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
};

