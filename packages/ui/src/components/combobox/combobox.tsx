'use client';

import * as React from 'react';
import {ChevronDownIcon} from 'lucide-react';

import {Popover, PopoverContent, PopoverTrigger} from '../popover';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '../command';
import {cn} from '../../lib/utils';
import styles from './combobox.module.scss';

export interface ComboboxOption {
    value: string;
    label: string;
}

export interface ComboboxProps {
    id?: string;
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    className?: string;
}

export function Combobox({
                             id,
                             options,
                             value,
                             onValueChange,
                             placeholder = 'Select an option…',
                             searchPlaceholder = 'Search…',
                             emptyMessage = 'No results found.',
                             disabled,
                             className,
                         }: ComboboxProps) {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(value ?? '');
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    const focusInputOnOpenRef = React.useRef(false);

    const focusWithoutScroll = React.useCallback((element: HTMLElement | null) => {
        if (!element) {
            return;
        }

        try {
            element.focus({preventScroll: true});
        } catch {
            element.focus();
        }
    }, []);

    React.useEffect(() => {
        setSelected(value ?? '');
    }, [value]);

    React.useEffect(() => {
        if (!open) {
            return;
        }

        if (!focusInputOnOpenRef.current) {
            return;
        }

        const frame = window.requestAnimationFrame(() => {
            focusWithoutScroll(inputRef.current);
        });

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, [focusWithoutScroll, open]);

    const selectedLabel = options.find((o) => o.value === selected)?.label;

    const handleSelect = (val: string) => {
        const next = val === selected ? '' : val;
        setSelected(next);
        onValueChange?.(next);
        setOpen(false);
    };

    const handleOpenChange = React.useCallback((nextOpen: boolean) => {
        setOpen(nextOpen);

        if (!nextOpen) {
            focusInputOnOpenRef.current = false;
            window.requestAnimationFrame(() => {
                focusWithoutScroll(triggerRef.current);
            });
        }
    }, [focusWithoutScroll]);

    const handleTriggerPointerDown = React.useCallback(() => {
        focusInputOnOpenRef.current = false;
    }, []);

    const handleTriggerKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            focusInputOnOpenRef.current = true;
        }
    }, []);

    return (
        <Popover open={open} onOpenChange={handleOpenChange}>
            <PopoverTrigger
                id={id}
                ref={triggerRef}
                type="button"
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                disabled={disabled}
                className={cn(styles.trigger, className)}
                onPointerDown={handleTriggerPointerDown}
                onKeyDown={handleTriggerKeyDown}
            >
                <span className={styles.value}>
                    {selectedLabel ?? (
                        <span className={styles.placeholder}>{placeholder}</span>
                    )}
                </span>
                <ChevronDownIcon
                    className={cn(styles.triggerIcon, open && styles.triggerIconOpen)}
                    aria-hidden="true"/>
            </PopoverTrigger>
            <PopoverContent className={styles.content} align="start" initialFocus={false} finalFocus={false}>
                <Command>
                    <CommandInput ref={inputRef} placeholder={searchPlaceholder}/>
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    data-checked={selected === option.value ? 'true' : undefined}
                                    onSelect={handleSelect}
                                    className={styles.item}
                                >
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
