import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setup.js',
        coverage: {
            reporter: ['lcov', 'json']
        }
    }
};

export default config;
