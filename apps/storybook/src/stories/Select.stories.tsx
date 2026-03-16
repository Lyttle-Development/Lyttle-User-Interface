import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from '@lyttle-development/ui';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Displays a list of options for the user to pick from — triggered by a button.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-48">
                <SelectValue placeholder="Select a fruit"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const WithGroups: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-48">
                <SelectValue placeholder="Select a timezone"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time
                        (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time
                        (CST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time
                        (PST)</SelectItem>
                </SelectGroup>
                <SelectSeparator/>
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time
                        (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time
                        (CET)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Select disabled>
            <SelectTrigger className="w-48">
                <SelectValue placeholder="Disabled"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="value">Value</SelectItem>
            </SelectContent>
        </Select>
    ),
};