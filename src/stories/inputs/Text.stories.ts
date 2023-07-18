import Text from '$lib/components/inputs/Text.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Inputs/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
