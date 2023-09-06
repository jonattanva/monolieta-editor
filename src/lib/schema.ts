import type { Theme } from './type';

export default function (): Theme {
    /*
    if (!window || !window.localStorage || !window.matchMedia) {
        return 'dark';
    }

    if (localStorage.theme === 'dark') {
        return 'dark';
    }

    if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return 'dark';
    }
*/
    return 'light';
}
