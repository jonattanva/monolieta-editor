import Search from '$lib/components/inputs/Search.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Inputs/Search',
    component: Search,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
