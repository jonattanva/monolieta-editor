import { derived, writable } from 'svelte/store';
import { nanoid } from 'nanoid';

import type { Resources } from '$lib/type';

const resources = writable<Resources>([]);

export const insert = (source: File) => {
    resources.update((previous) => {
        const id = nanoid();
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
