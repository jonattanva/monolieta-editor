import random from '$lib/color';
import { Search } from 'monolieta-search';
import { derived, writable } from 'svelte/store';
import { nanoid } from 'nanoid';

import type { Label, Labels, Sortable } from '$lib/type';

const document = new Search();
const labels = writable<Labels>([]);

export const insert = () => {
    labels.update((previous) => [
        {
            id: nanoid(),
            name: '',
            color: random()
        },
        ...previous
    ]);
};

export const update = (label: Label) => {
    labels.update((previous) => {
        const current = previous.find((row) => {
            return row.id === label.id;
        });

        if (current) {
            document.remove(current.id);
            current.name = label.name;
            current.color = label.color;

            // prettier-ignore
            document.index(current.id, [
                current.name, 
                current.color
            ]);

            return [...previous];
        }

        return previous;
    });
};

export const search = derived(labels, ($labels) => {
    return (query: string) => {
        const criteria = query.trim();
        if (criteria.length === 0) {
            return $labels;
        }

        const results = [];
        const keys = document.search(query);
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const item = $labels.find((it) => it.id === key);
            if (item) {
                results.push(item);
            }
        }
        return results;
    };
});

export const values = derived(labels, ($labels) => {
    return $labels;
});

export const sort = derived(labels, ($labels) => {
    return (sortable: Sortable) => {
        if (sortable === 'asc') {
            $labels.sort((before, after) => {
                return before.name.localeCompare(after.name);
            });
        } else {
            $labels.sort((before, after) => {
                return after.name.localeCompare(before.name);
            });
        }
        return $labels;
    };
});
