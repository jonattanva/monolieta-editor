import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

const config: UserConfig = {
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setup.js',
        include: ['src/**/*.{test,spec}.{js,ts}'],
        coverage: {
            reporter: ['lcov', 'json']
        }
    },
    plugins: [
        sveltekit(),
        SvelteKitPWA({
            srcDir: './src',
            devOptions: {
                enabled: true
            }
        })
    ]
};

export default config;
