import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    InputGroup,
    InputGroupText,
    Input,
    Button
} from '@lyttle-development/ui';
import {Search, Mail, DollarSign} from 'lucide-react';

const meta: Meta<typeof InputGroup> = {
    title: 'Components/InputGroup',
    component: InputGroup,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'An input with attached prefix or suffix elements such as icons or buttons.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const WithPrefix: Story = {
    render: () => (
        <InputGroup className="w-full max-w-sm">
            <InputGroupText>
                <Mail className="h-4 w-4"/>
            </InputGroupText>
            <Input type="email" placeholder="Enter email"/>
        </InputGroup>
    ),
};

export const WithSuffix: Story = {
    render: () => (
        <InputGroup className="w-full max-w-sm">
            <Input placeholder="Search..."/>
            <InputGroupText>
                <Search className="h-4 w-4"/>
            </InputGroupText>
        </InputGroup>
    ),
};

export const WithButton: Story = {
    render: () => (
        <InputGroup className="w-full max-w-sm">
            <Input placeholder="Enter keyword..."/>
            <Button>Search</Button>
        </InputGroup>
    ),
};

export const Currency: Story = {
    render: () => (
        <InputGroup className="w-full max-w-sm">
            <InputGroupText>
                <DollarSign className="h-4 w-4"/>
            </InputGroupText>
            <Input type="number" placeholder="0.00"/>
            <InputGroupText>USD</InputGroupText>
        </InputGroup>
    ),
};