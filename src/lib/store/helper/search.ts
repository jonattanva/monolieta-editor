import type { Search } from 'monolieta-search';
import { get, type Writable } from 'svelte/store';

export default function search<T extends Monolieta.Hash[], K>(
    collection: Writable<T>,
    client: Search,
    query: string
): K | T {
    const values = get(collection);
    const criteria = query.trim();
    if (criteria.length === 0) {
        return values as T;
    }

    const tokens = client.search(criteria);

    const results = [];
    for (let index = 0; index < tokens.length; index++) {
        const token = tokens[index];
        const item = values.find((value) => {
            return value.token === token;
        });

        if (item) {
            results.push(item);
        }
    }

    return results as K;
}
