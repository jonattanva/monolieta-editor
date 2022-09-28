<script>
    export /** @type {svelte.JSX.MouseEventHandler<HTMLDivElement>} */ let click;
</script>

<div class="main" on:click={click}>
    <slot />
</div>

<style>
    .main {
        align-items: center;
        border-radius: 0.25rem;
        cursor: pointer;
        display: flex;
        padding: 0.25rem;
        width: 100%;
    }

    .main:hover {
        background-color: var(--oc-gray-1);
    }
</style>
