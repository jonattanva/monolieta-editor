import remove from './helper/remove';
import search from './helper/search';
import { Search } from 'monolieta-search';
import { get, writable } from 'svelte/store';

type Callback = (resources: Monolieta.Resources) => void;

const client = new Search();
const resources = writable<Monolieta.Resources>([]);

function index(resource: Monolieta.Resource) {
    client.index(resource.token, resource.name);
    client.index(resource.token, resource.type);
}

export default {
    subscribe: (callback: Callback) => resources.subscribe(callback),

    add: (value: Monolieta.Resource): void => {
        resources.update((previous) => {
            index(value);
            return [value, ...previous];
        });
    },

    remove: (resource: Monolieta.Resource): void => remove(resources, resource),
    search: (query: string): Monolieta.Resources => search(resources, client, query)
};
