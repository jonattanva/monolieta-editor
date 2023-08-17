import type { Theme } from './type';

export default function (): Theme {
    return 'light';
    /*
  if (!window || !window.localStorage || !window.matchMedia) {
    return 'dark';
  }

  return localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? 'dark'
    : 'light';
    */
}
