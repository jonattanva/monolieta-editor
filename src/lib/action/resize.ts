import { onMount } from 'svelte';

export default function resize(node: HTMLElement, callback: (node: HTMLElement) => void) {
    function resize() {
        requestAnimationFrame(() => {
            callback(node);
        });
    }

    onMount(() => {
        resize();
    });

    window.addEventListener('resize', resize);
    return {
        destroy() {
            window.removeEventListener('resize', resize);
        }
    };
}
