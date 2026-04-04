'use client';

import * as React from 'react';
import {CheckIcon, ChevronDownIcon} from 'lucide-react';

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

    React.useEffect(() => {
        setSelected(value ?? '');
    }, [value]);

    React.useEffect(() => {
        if (!open) {
            return;
        }

        const frame = window.requestAnimationFrame(() => {
            inputRef.current?.focus({preventScroll: true});
        });

        return () => window.cancelAnimationFrame(frame);
    }, [open]);

    const selectedLabel = options.find((o) => o.value === selected)?.label;

    const handleSelect = (val: string) => {
        const next = val === selected ? '' : val;
        setSelected(next);
        onValueChange?.(next);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                type="button"
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                disabled={disabled}
                className={cn(styles.trigger, className)}
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
            <PopoverContent className={styles.content} align="start" initialFocus={false}>
                <Command>
                    <CommandInput ref={inputRef} placeholder={searchPlaceholder}/>
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={handleSelect}
                                    className={styles.item}
                                >
                                    <CheckIcon
                                        aria-hidden="true"
                                        className={cn(styles.itemCheck, selected === option.value ? styles.itemCheckVisible : styles.itemCheckHidden)}
                                    />
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
