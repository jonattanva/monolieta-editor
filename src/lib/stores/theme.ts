import { derived, writable } from 'svelte/store';
import getSchema from '$lib/schema';
import type { Theme } from '$lib/type';

export const theme = writable<Theme>(getSchema());

const apply = (theme: Theme): void => {
    if (!document.documentElement.classList.contains(theme)) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
};

const save = (theme: Theme): Theme => {
    localStorage.setItem('theme', theme);
    apply(theme);
    return theme;
};

export default function (): void {
    theme.update((previous) => {
        return save(previous === 'dark' ? 'light' : 'dark');
    });
}

export const isDark = derived(theme, ($theme) => {
    return $theme === 'dark';
});

export const isLight = derived(theme, ($theme) => {
    return $theme === 'light';
});

export const init = () => {
    theme.update(() => {
        return save(getSchema());
    });
};
