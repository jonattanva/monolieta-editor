import Remove from '$lib/template/labels/Remove.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Template/Labels/Remove',
    component: Remove,
    tags: ['autodocs']
} satisfies Meta<Remove>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'Person'
    }
};
