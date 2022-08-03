import { writable } from 'svelte/store';

const values = writable<Monolieta.Labels>([]);

export default {
    set: (value: Monolieta.Label) => {
        values.update((previous) => [value, ...previous]);
    },
    subscribe: (callback: (values: Monolieta.Labels) => void) => {
        return values.subscribe(callback);
    }
};
