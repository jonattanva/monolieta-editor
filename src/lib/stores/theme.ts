import { derived, writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>('dark');

export default function () {
    theme.update((previous) => (previous === 'dark' ? 'light' : 'dark'));
}

export const isDark = derived(theme, ($theme) => {
    return $theme === 'dark';
});

export const isLight = derived(theme, ($theme) => {
    return $theme === 'light';
});
