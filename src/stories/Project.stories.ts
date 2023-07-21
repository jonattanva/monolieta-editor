import Manager from '$lib/template/Project.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Template/Project',
    component: Manager,
    tags: ['autodocs']
} satisfies Meta<Manager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
