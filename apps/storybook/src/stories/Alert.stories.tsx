import type {Meta, StoryObj} from '@storybook/react-vite';
import {Alert, AlertTitle, AlertDescription} from '@lyttle-development/ui';
import {AlertCircle, CheckCircle2, Info, AlertTriangle} from 'lucide-react';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
            description: 'Alert variant',
        },
    },
    args: {
        variant: 'default',
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    render: () => (
        <Alert>
            <Info className="h-4 w-4"/>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
                You can change your display name from your profile settings.
            </AlertDescription>
        </Alert>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4"/>
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
                We could not save your changes. Please try again or contact
                support.
            </AlertDescription>
        </Alert>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="space-y-3 max-w-lg">
            <Alert>
                <Info className="h-4 w-4"/>
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational message for the
                    user.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try
                    again.</AlertDescription>
            </Alert>
        </div>
    ),
};

export const FormValidation: Story = {
    name: 'Real World: Form validation',
    render: () => (
        <div className="space-y-3 max-w-lg">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>Validation errors</AlertTitle>
                <AlertDescription>
                    <ul className="mt-1 list-disc list-inside space-y-1 text-sm">
                        <li>Email address is required</li>
                        <li>Password must be at least 8 characters</li>
                        <li>Please accept the terms and conditions</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </div>
    ),
};

export const SystemStatus: Story = {
    name: 'Real World: System status',
    render: () => (
        <div className="space-y-3 max-w-lg">
            <Alert>
                <CheckCircle2 className="h-4 w-4 text-primary"/>
                <AlertTitle>Deployment successful</AlertTitle>
                <AlertDescription>
                    Your application has been deployed to production. Changes
                    are live.
                </AlertDescription>
            </Alert>
            <Alert>
                <AlertTriangle className="h-4 w-4 text-yellow-500"/>
                <AlertTitle>Scheduled maintenance</AlertTitle>
                <AlertDescription>
                    We will perform maintenance on Saturday 14 June from
                    02:00–04:00 UTC.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>Service degradation</AlertTitle>
                <AlertDescription>
                    API response times are elevated. Our team is investigating.
                </AlertDescription>
            </Alert>
        </div>
    ),
};