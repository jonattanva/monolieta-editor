import type { Writable } from 'svelte/store';

type Callback<T> = (a: T, b: T) => number;

export default function sort<T>(collection: Writable<T[]>, callback: Callback<T>) {
    collection.update((updater) => {
        updater.sort(callback);
        return [...updater];
    });
}
