import { Tool } from '$lib/type';
import { derived, writable } from 'svelte/store';

const current = writable(Tool.Cursor);

export const set = (tool: Tool) => {
    current.update(() => {
        return tool;
    });
};

export const action = derived(current, ($current) => {
    return $current;
});
