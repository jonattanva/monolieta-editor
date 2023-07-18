import Resources from '$lib/components/resources/Resources.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const resources = new Array(8).fill(0).map((_, index) => {
    const key = index + 1;
    return {
        id: `${key}`,
        source: `https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/${key}.jpg`,
        token: `${key}`
    };
});

const meta = {
    title: 'Component/Resources/Resources',
    component: Resources,
    tags: ['autodocs'],
    argTypes: {
        entity: { control: 'text' }
    }
} satisfies Meta<Resources>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        resources,
        entity: '3'
    }
};
