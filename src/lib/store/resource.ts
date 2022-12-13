import remove from './helper/remove';
import search from './helper/search';
import { Search } from 'monolieta-search';
import { get, writable } from 'svelte/store';

type Callback = (resources: Monolieta.Resources) => void;

const client = new Search();
const values = writable<Monolieta.Resources>([]);

function index(resource: Monolieta.Resource) {
    client.index(resource.token, resource.name);
    client.index(resource.token, resource.type);
}

export default {
    subscribe: (callback: Callback) => values.subscribe(callback),

    add: (value: Monolieta.Resource): void => {
        values.update((previous) => {
            index(value);
            return [value, ...previous];
        });
    },

    remove: (value: Monolieta.Resource): void => remove(values, value),

    search: (query: string): Monolieta.Resources => search(values, client, query)
};
