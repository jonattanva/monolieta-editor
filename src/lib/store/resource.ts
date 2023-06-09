import remove from './helper/remove';
import search from './helper/search';
import { Search } from 'monolieta-search';
import { writable } from 'svelte/store';

import type { Resources, Resource } from '$lib/type';

type Callback = (resources: Resources) => void;

const client = new Search();
const values = writable<Resources>([]);

function index(resource: Resource) {
    client.index(resource.token, resource.name);
    client.index(resource.token, resource.type);
}

export default {
    subscribe: (callback: Callback) => values.subscribe(callback),

    add: (value: Resource): void => {
        values.update((previous) => {
            index(value);
            return [value, ...previous];
        });
    },

    remove: (value: Resource): void => remove(values, value),

    search: (query: string): Resources => search(values, client, query)
};
