/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    light: '#d2b3ff',
                    DEFAULT: '#6200ee',
                    dark: '#5700d5'
                }
            }
        }
    },
    plugins: []
};
