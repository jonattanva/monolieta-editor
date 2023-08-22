import support from './support';
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

export const search = derived(resources, ($resources) => {
    return (query: string) => {
        return support.search($resources, document, query);
    };
});

export const sort = derived(resources, ($resources) => {
    return (sortable: Sortable) => {
        if (sortable === 'asc') {
            $resources.sort((before, after) => {
                return before.source.name.localeCompare(after.source.name);
            });
        } else {
            $resources.sort((before, after) => {
                return after.source.name.localeCompare(before.source.name);
            });
        }
        return $resources;
    };
});
