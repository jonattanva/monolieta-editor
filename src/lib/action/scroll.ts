import { onMount } from 'svelte';

type Option = {
    set?: (left: number, top: number) => void;
};

export default function scroll(node: HTMLDivElement, option: Option) {
    function handle() {
        requestAnimationFrame(() => {
            if (option.set) {
                option.set(node.scrollLeft, node.scrollTop);
            }
        });
    }

    onMount(() => {
        handle();
    });

    node.addEventListener('scroll', handle);

    return {
        destroy() {
            node.removeEventListener('scroll', handle);
        }
    };
}
