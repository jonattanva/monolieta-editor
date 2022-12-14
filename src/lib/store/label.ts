import color from '$lib/color';
import remove from './helper/remove';
import search from './helper/search';
import sort from './helper/sort';
import { Search } from 'monolieta-search';
import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';

const client = new Search();
const values = writable<Monolieta.Labels>([]);

function index(value: Monolieta.Label) {
    client.index(value.token, value.name);
    client.index(value.token, value.color);
}

export function template(name: string = '') {
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
    init: (value: Monolieta.Labels) => {
        values.update(() => {
            let results = [];
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

    add: (value: Monolieta.Label) => {
        values.update((previous) => [value, ...previous]);
    },

    duplicate: (value: Monolieta.Label) => {
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

    remove: (value: Monolieta.Label): void => remove(values, value),

    set: (value: Monolieta.Label) => {
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

    search: (query: string): Monolieta.Labels => search(values, client, query),

    sort: (callback: (a: Monolieta.Label, b: Monolieta.Label) => number) => sort(values, callback),

    subscribe: (callback: (values: Monolieta.Labels) => void) => values.subscribe(callback)
};
