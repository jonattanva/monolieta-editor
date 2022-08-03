import { onMount } from 'svelte';

type Option = {
    set?: (width: number, height: number) => void;
};

export default function resize(node: HTMLElement, option: Option) {
    function handle() {
        requestAnimationFrame(() => {
            if (option.set) {
                option.set(node.offsetWidth, node.offsetHeight);
            }
        });
    }

    onMount(() => {
        handle();
    });

    window.addEventListener('resize', handle);
    return {
        destroy() {
            window.removeEventListener('resize', handle);
        }
    };
}
