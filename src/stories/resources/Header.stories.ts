import Header from '$lib/components/resources/Header.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Resources/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
