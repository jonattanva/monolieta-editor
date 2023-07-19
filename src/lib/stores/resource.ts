import { derived, writable } from 'svelte/store';
import { nanoid } from 'nanoid';

import type { Resources } from '$lib/type';

const resources = writable<Resources>([]);

export const insert = (source: File | string) => {
    resources.update((previous) => [
        {
            id: nanoid(),
            source,
            labels: []
        },
        ...previous
    ]);
};

export const values = derived(resources, ($labels) => {
    return $labels;
});
