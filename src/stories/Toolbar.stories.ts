import Toolbar from '$lib/components/toolbar/Toolbar.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Toolbar',
    component: Toolbar,
    tags: ['autodocs']
} satisfies Meta<Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
