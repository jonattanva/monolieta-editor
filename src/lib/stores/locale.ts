import { derived, writable } from 'svelte/store';

import en from '../../locales/en.json';
import es from '../../locales/es.json';

const locales: Record<string, Record<string, string>> = { en, es };

export const locale = writable('en');

export const translate = derived(locale, ($locale) => {
    return (key: string) => {
        return process($locale, key);
    };
});

function process(locale: string, key: string) {
    const text = locales[locale][key];
    if (!text) {
        console.error(`no translation found for ${locale}.${key}`);
        return key;
    }
    return text;
}
