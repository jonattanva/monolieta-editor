import Modal from './Modal.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Modal',
    component: Modal,
    tags: ['autodocs']
} satisfies Meta<Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
