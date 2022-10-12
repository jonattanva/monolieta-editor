import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
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
