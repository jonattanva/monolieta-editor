import type { Theme } from './type';

export default function (): Theme {
    if (!window.localStorage || !window.matchMedia) {
        return 'dark';
    }

    return localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light';
}
