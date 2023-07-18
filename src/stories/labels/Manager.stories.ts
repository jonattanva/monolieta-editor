import Manager from '$lib/components/labels/Manager.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Labels/Manager',
    component: Manager,
    tags: ['autodocs']
} satisfies Meta<Manager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
