import Text from '$lib/components/buttons/Text.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Button/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium']
        }
    }
} satisfies Meta<Text>;

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
