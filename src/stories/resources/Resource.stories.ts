import Resource from '$lib/components/resources/Resource.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
    title: 'Component/Resources/Resource',
    component: Resource,
    tags: ['autodocs']
} satisfies Meta<Resource>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        resource: {
            id: '1',
            source: `https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/1.jpg`,
            token: '1'
        }
    }
};
