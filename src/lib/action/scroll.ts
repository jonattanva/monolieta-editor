import { onMount } from 'svelte';

export default function resize(node: HTMLElement, callback: (node: HTMLElement) => void) {
    function scroll() {
        requestAnimationFrame(() => {
            callback(node);
        });
    }

    onMount(() => {
        scroll();
    });

    node.addEventListener('scroll', scroll);
    return {
        destroy() {
            node.removeEventListener('scroll', scroll);
        }
    };
}
