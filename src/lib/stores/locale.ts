import { derived, writable } from 'svelte/store';

import en from '../../locales/en.json';
import es from '../../locales/es.json';

const locales: Record<string, Record<string, string>> = { en, es };

export const locale = writable('en');

export const translate = derived(locale, ($locale) => {
    return (key: string, values: Record<string, string> = {}) => {
        return process($locale, key, values);
    };
});

function process(
    locale: string,
    key: string,
    values: Record<string, string> = {}
) {
    let text = locales[locale][key];
    if (!text) {
        console.error(`no translation found for ${locale}.${key}`);
        return key;
    }

    Object.keys(values).map((key) => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        text = text.replace(regex, values[key]);
    });

    return text;
}
