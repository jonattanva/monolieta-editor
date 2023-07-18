import Filter from '$lib/components/resources/Filter.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Resources/Filter',
    component: Filter,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
