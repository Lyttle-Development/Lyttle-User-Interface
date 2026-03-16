import type {Meta, StoryObj} from '@storybook/react-vite';
import {NativeSelect} from '@lyttle-development/ui';

const meta: Meta<typeof NativeSelect> = {
    title: 'Components/NativeSelect',
    component: NativeSelect,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A native HTML select element with consistent styling.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
    render: () => (
        <NativeSelect className="w-48">
            <option value="">Select an option</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
        </NativeSelect>
    ),
};

export const WithGrouping: Story = {
    render: () => (
        <NativeSelect className="w-48">
            <option value="">Select a country</option>
            <optgroup label="Europe">
                <option value="gb">United Kingdom</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
            </optgroup>
            <optgroup label="Americas">
                <option value="us">United States</option>
                <option value="ca">Canada</option>
            </optgroup>
        </NativeSelect>
    ),
};

export const Disabled: Story = {
    render: () => (
        <NativeSelect className="w-48" disabled>
            <option>Disabled select</option>
        </NativeSelect>
    ),
};