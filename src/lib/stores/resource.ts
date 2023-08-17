import { Search } from 'monolieta-search';
import { derived, writable } from 'svelte/store';
import { nanoid } from 'nanoid';

import type { Resources, Sortable } from '$lib/type';

const document = new Search();
const resources = writable<Resources>([]);

export const insert = (source: File) => {
    resources.update((previous) => {
        const id = nanoid();
        document.index(id, [source.name]);

        return [
            {
                id,
                source,
                labels: []
            },
            ...previous
        ];
    });
};

export const values = derived(resources, ($labels) => {
    return $labels;
});

export const search = derived(resources, ($labels) => {
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

export const sort = derived(resources, ($labels) => {
    return (sortable: Sortable) => {
        if (sortable === 'asc') {
            $labels.sort((before, after) => {
                return before.source.name.localeCompare(after.source.name);
            });
        } else {
            $labels.sort((before, after) => {
                return after.source.name.localeCompare(before.source.name);
            });
        }
        return $labels;
    };
});
