import type {Meta, StoryObj} from '@storybook/react-vite';
import {Label, Switch} from '@lyttle-development/ui';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A control that allows the user to toggle between checked and not checked.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: () => <Switch/>,
};

export const Checked: Story = {
    render: () => <Switch defaultChecked/>,
};

export const Disabled: Story = {
    render: () => <Switch disabled/>,
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode"/>
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    ),
};

export const WithLabelAndDescription: Story = {
    render: () => (
        <div className="flex items-start space-x-3">
            <Switch id="marketing" defaultChecked/>
            <div className="grid gap-1.5 leading-none">
                <Label htmlFor="marketing">Marketing emails</Label>
                <p className="text-sm text-muted-foreground">
                    Receive emails about new products, features, and more.
                </p>
            </div>
        </div>
    ),
};