import Button from './Text.svelte';

export default {
    title: 'Component/Button/Text',
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
