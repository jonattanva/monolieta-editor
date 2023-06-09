/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#d2b3ff',
                    DEFAULT: '#6200ee',
                    dark: '#5700d5'
                },
                accent: {
                    light: '#e8eaee',
                    DEFAULT: '#f3f4f6',
                    dark: '#e5e7eb'
                }
            }
        }
    },
    plugins: []
};
