<script>
    export /** @type {number} */ let tabindex = 0;
    export /** @type {string|null} */ let test = null;
    export /** @type {string} */ let title = '';
    export /** @type {svelte.JSX.MouseEventHandler<HTMLButtonElement>} */ let click;
</script>

<button class="main" on:click={click} data-testid={test} {tabindex} {title}>
    <slot />
</button>

<style>
    .main {
        align-items: center;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid transparent;
        box-sizing: border-box;
        color: var(--oc-gray-7);
        cursor: default;
        display: flex;
        height: var(--button-height, 28px);
        justify-content: center;
        min-width: var(--button-width, 28px);
        outline-color: var(--oc-gray-3);
        padding: 0;
        width: var(--button-width, 28px);
    }

    .main:hover {
        background-color: var(--oc-gray-3);
    }

    .main:active {
        background-color: var(--oc-gray-4);
    }
</style>
