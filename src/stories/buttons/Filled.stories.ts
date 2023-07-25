import Filled from '$lib/components/buttons/Filled.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Button/Filled',
    component: Filled,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium']
        }
    }
} satisfies Meta<Filled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button'
    }
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button'
    }
};

export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Button'
    }
};
