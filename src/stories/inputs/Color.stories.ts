import Color from '$lib/components/inputs/Color.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Inputs/Color',
    component: Color,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
