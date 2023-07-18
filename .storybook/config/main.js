/** @type { import('@storybook/sveltekit').StorybookConfig } */

const config = {
    stories: [
        '../../src/**/*.stories.mdx',
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links'
    ],
    framework: {
        name: '@storybook/sveltekit',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    }
};

export default config;
