'use client';

import * as React from 'react';
import {type DayButton, DayPicker, type Locale} from 'react-day-picker';
import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';

import {cn} from '../../lib/utils';
import {Button, buttonVariants} from '../button';
import styles from './calendar.module.scss';

function Calendar({
                      className,
                      classNames,
                      showOutsideDays = true,
                      captionLayout = 'label',
                      buttonVariant = 'ghost',
                      locale,
                      formatters,
                      components,
                      ...props
                  }: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(styles.calendar, className)}
            captionLayout={captionLayout}
            locale={locale}
            formatters={{
                formatMonthDropdown: (date) =>
                    date.toLocaleString(locale?.code, {month: 'short'}),
                ...formatters,
            }}
            classNames={{
                root: styles.root,
                months: styles.months,
                month: styles.month,
                nav: styles.nav,
                button_previous: cn(
                    buttonVariants({variant: buttonVariant, size: 'icon'}),
                    styles.navButton,
                    styles.navButtonPrevious
                ),
                button_next: cn(
                    buttonVariants({variant: buttonVariant, size: 'icon'}),
                    styles.navButton,
                    styles.navButtonNext
                ),
                month_caption: styles.monthCaption,
                dropdowns: cn(
                    styles.dropdowns,
                    captionLayout !== 'label' && styles.dropdownsInteractive
                ),
                dropdown_root: styles.dropdownRoot,
                dropdown: styles.dropdown,
                caption_label: cn(
                    styles.captionLabel,
                    captionLayout === 'label'
                        ? styles.captionLabelStatic
                        : styles.captionLabelInteractive
                ),
                table: styles.table,
                weekdays: styles.weekdays,
                weekday: styles.weekday,
                week: styles.week,
                week_number_header: styles.weekNumberHeader,
                week_number: styles.weekNumber,
                day: cn(
                    styles.day,
                    props.showWeekNumber ? styles.dayWithWeekNumber : styles.dayWithoutWeekNumber
                ),
                range_start: styles.rangeStart,
                range_middle: styles.rangeMiddle,
                range_end: styles.rangeEnd,
                today: styles.today,
                outside: styles.outside,
                disabled: styles.disabled,
                hidden: styles.hidden,
                ...classNames,
            }}
            components={{
                Root: ({className, rootRef, ...props}) => (
                    <div
                        data-slot="calendar"
                        ref={rootRef}
                        className={cn(className)}
                        {...props}
                    />
                ),
                Chevron: ({className, orientation, ...props}) => {
                    if (orientation === 'left') {
                        return <ChevronLeftIcon
                            className={cn(styles.chevron, className)} {...props} />;
                    }

                    if (orientation === 'right') {
                        return <ChevronRightIcon
                            className={cn(styles.chevron, className)} {...props} />;
                    }

                    return <ChevronDownIcon
                        className={cn(styles.chevron, className)} {...props} />;
                },
                DayButton: ({...props}) => <CalendarDayButton
                    locale={locale} {...props} />,
                WeekNumber: ({children, ...props}) => (
                    <td {...props}>
                        <div className={styles.weekNumberCell}>{children}</div>
                    </td>
                ),
                ...components,
            }}
            {...props}
        />
    );
}

function CalendarDayButton({
                               className,
                               day,
                               modifiers,
                               locale,
                               ...props
                           }: React.ComponentProps<typeof DayButton> & {
    locale?: Partial<Locale>
}) {
    const ref = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        if (modifiers.focused) {
            ref.current?.focus();
        }
    }, [modifiers.focused]);

    return (
        <Button
            ref={ref}
            variant="ghost"
            size="icon"
            data-day={day.date.toLocaleDateString(locale?.code)}
            data-selected-single={
                modifiers.selected &&
                !modifiers.range_start &&
                !modifiers.range_end &&
                !modifiers.range_middle
            }
            data-range-start={modifiers.range_start}
            data-range-end={modifiers.range_end}
            data-range-middle={modifiers.range_middle}
            className={cn(styles.dayButton, className)}
            {...props}
        />
    );
}

export {Calendar, CalendarDayButton};

