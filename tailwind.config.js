/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    dark: 'var(--bg-accent-dark, #2a2c2e)',
                    light: 'var(--bg-accent-light, #e8e9ee)'
                },
                primary: {
                    dark: 'var(--bg-primary-dark, #d3b5ff)',
                    light: 'var(--bg-primary-light, #6200ee)'
                },
                theme: {
                    dark: 'var(--bg-black, #222425)',
                    light: 'var(--bg-white, #fff)'
                },
                shape: {
                    dark: 'var(--bg-shape-dark, #3d3f43)',
                    light: 'var(--bg-shape-light, #e8e9ee)'
                },
                font: {
                    dark: 'var(--bg-font-dark, #94a3b8)',
                    light: 'var(--bg-font-light, #1e293b)'
                }
            }
        }
    },
    plugins: []
};
