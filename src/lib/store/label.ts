import color from '$lib/color';
import { Search } from 'monolieta-search';
import { get, writable } from 'svelte/store';
import { nanoid } from 'nanoid';

const client = new Search();

const values = writable<Monolieta.Labels>([]);

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
    add: (value: Monolieta.Label) => {
        values.update((previous) => [value, ...previous]);
    },

    set: (value: Monolieta.Label) => {
        values.update((previous) => {
            const current = previous.find((label) => {
                return label.id === value.id;
            });

            if (current) {
                current.updatedAt = Date.now();
                current.name = value.name;
                current.color = value.color;
                current.token = nanoid();

                client.index(value.token, value.name);
            }

            return [...previous];
        });
    },

    search: (query: string): Monolieta.Labels => {
        const current = get(values);
        const criteria = query.trim();

        if (criteria.length === 0) {
            return current;
        }

        const results: Monolieta.Label[] = [];
        client.search(criteria).forEach((key) => {
            const item = current.find((label) => {
                return label.token === key;
            });

            if (item) {
                results.push(item);
            }
        });

        return results;
    },

    subscribe: (callback: (values: Monolieta.Labels) => void) => {
        return values.subscribe(callback);
    }
};
