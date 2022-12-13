import type { Writable } from 'svelte/store';

export default function remove<T extends Monolieta.Entities>(
    collection: Writable<T>,
    entity: Monolieta.Entity
) {
    collection.update((updater) => {
        const index = updater.findIndex((row) => {
            return row.id === entity.id;
        });

        if (index >= 0) {
            updater.splice(index, 1);
            return [...updater] as T;
        }

        return updater;
    });
}
