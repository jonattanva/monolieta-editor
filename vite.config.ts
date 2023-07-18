import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setup.js',
        include: ['src/**/*.{test,spec}.{js,ts}'],
        coverage: {
            provider: 'v8',
            reporter: ['lcov', 'json']
        }
    }
});
