import Button from './Contained.svelte';

export default {
    title: 'Component/Button/Contained',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium']
        }
    }
};

export const Primary = {
    args: {
        label: 'Button'
    }
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button'
    }
};
