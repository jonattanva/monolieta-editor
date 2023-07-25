import Fab from '$lib/components/buttons/Fab.svelte';
import image from '$lib/assets/image/trash.svg';

import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Button/Fab',
    component: Fab,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: image
    }
};
