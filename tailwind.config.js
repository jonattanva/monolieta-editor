/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--bg-primary, #6200ee)',
                    dark: 'var(--bg-primary-dark, #5700d5)',
                    light: 'var(--bg-primary-light, #d2b3ff)'
                },
                accent: {
                    DEFAULT: 'var(--bg-accent, #f3f4f6)',
                    dark: 'var(--bg-accent-dark, #e5e7eb)',
                    light: 'var(--bg-accent-light, #e8eaee)'
                },
                theme: {
                    dark: 'var(--bg-black, #333)',
                    light: 'var(--bg-white, #fff)'
                }
            }
        }
    },
    plugins: []
};
