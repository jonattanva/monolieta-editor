import type { Entity } from '../../type';
import type { Search } from 'monolieta-search';

export default function search<T extends Entity[], K>(
    collection: T,
    client: Search,
    query: string
): K | T {
    const criteria = query.trim();
    if (criteria.length === 0) {
        return collection as T;
    }

    const results = [];
    const keys = client.search(query);
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const item = collection.find((it) => it.id === key);
        if (item) {
            results.push(item);
        }
    }
    return results as K;
}
