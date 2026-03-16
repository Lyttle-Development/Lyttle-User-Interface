import type {Meta, StoryObj} from '@storybook/react-vite';
import {Calendar} from '@lyttle-development/ui';
import * as React from 'react';
import type {DateRange} from 'react-day-picker';

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A date picker calendar component built on top of react-day-picker.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    render: () => {
        const [date, setDate] = React.useState<Date | undefined>(new Date());
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        );
    },
};

export const RangeSelection: Story = {
    render: () => {
        const [range, setRange] = React.useState<DateRange | undefined>();
        return (
            <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                className="rounded-md border"
            />
        );
    },
};

export const WithDisabledDates: Story = {
    render: () => {
        const [date, setDate] = React.useState<Date | undefined>();
        const today = new Date();
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < today}
                className="rounded-md border"
            />
        );
    },
};