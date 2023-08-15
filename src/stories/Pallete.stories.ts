import Pallete from '$lib/components/Pallete.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Pallete',
    component: Pallete,
    tags: ['autodocs']
} satisfies Meta<Pallete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
