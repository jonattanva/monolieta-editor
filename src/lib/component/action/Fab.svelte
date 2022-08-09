<script lang="ts">
    export let click: (event: MouseEvent) => void;
    export let test: string | null = null;
    export let tabindex: number = 0;
</script>

<button on:click={click} data-testid={test} {tabindex}>
    <slot />
</button>

<style>
    button {
        align-items: center;
        background-color: var(--oc-gray-2);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-2);
        box-sizing: border-box;
        color: var(--oc-gray-7);
        cursor: pointer;
        display: flex;
        height: 28px;
        justify-content: center;
        min-width: 28px;
        padding: 4px;
        width: 28px;
    }

    button:hover {
        background-color: var(--oc-gray-3);
    }

    button:active {
        background-color: var(--oc-gray-4);
    }
</style>
