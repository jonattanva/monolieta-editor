import Manager from '$lib/template/labels/Manager.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Template/Labels/Manager',
    component: Manager,
    tags: ['autodocs']
} satisfies Meta<Manager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
