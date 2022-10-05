<script>
    export /** @type {svelte.JSX.MouseEventHandler<HTMLDivElement>} */ let click;
</script>

<div class="flex items-center p-1 rounded cursor-pointer w-full hover:bg-gray-100" on:click={click}>
    <slot />
</div>
