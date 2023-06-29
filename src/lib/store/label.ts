import color from '$lib/color';
import remove from './helper/remove';
import search from './helper/search';
import sort from './helper/sort';
import { Search } from 'monolieta-search';
import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';

import type { Labels, Label } from '$lib/type';

const client = new Search();
const values = writable<Labels>([]);

function index(value: Label) {
    client.index(value.token, value.name);
    client.index(value.token, value.color);
}

export function template(name = '') {
    return {
        id: nanoid(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        name: name,
        color: color(),
        token: nanoid()
    };
}

export default {
    init: (value: Labels) => {
        values.update(() => {
            const results = [];
            for (let i = 0; i < value.length; i++) {
                const element = value[i];
                if (!element.id) {
                    element.id = nanoid();
                }

                if (!element.color) {
                    element.color = color();
                }

                if (!element.token) {
                    element.token = nanoid();
                }

                index(element);
                results.push(element);
            }
            return results;
        });
    },

    add: (value: Label) => {
        values.update((previous) => [value, ...previous]);
    },

    duplicate: (value: Label) => {
        const current = {
            ...value,
            id: nanoid(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            token: nanoid()
        };

        index(current);
        values.update((previous) => {
            return [current, ...previous];
        });
    },

    remove: (value: Label): void => remove(values, value),

    set: (value: Label) => {
        values.update((previous) => {
            const current = previous.find((row) => {
                return row.id === value.id;
            });

            if (current) {
                current.updatedAt = Date.now();
                current.name = value.name;
                current.color = value.color;
                current.token = nanoid();

                index(value);
            }

            return [...previous];
        });
    },

    search: (query: string): Labels => search(values, client, query),

    sort: (callback: (a: Label, b: Label) => number) => sort(values, callback),

    subscribe: (callback: (values: Labels) => void) => values.subscribe(callback)
};
