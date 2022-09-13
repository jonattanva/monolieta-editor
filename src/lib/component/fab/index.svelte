<script>
	export /** @type {number} */ let tabindex = 0;
    export /** @type {string | null} */ let test = null;
	export /** @type {string|null} */ let title = null;
	export /** @type {svelte.JSX.MouseEventHandler<HTMLButtonElement> | null | undefined} */ let click;
</script>

<button class="main" on:click={click} data-testid={test} {tabindex} {title}>
	<slot />
</button>

<style>
	.main {
		align-items: center;
		background-color: var(--oc-gray-2, #e9ecef);
		border-radius: 4px;
		border: 1px solid var(--oc-gray-2, #e9ecef);
		box-sizing: border-box;
		color: var(--oc-gray-7, #495057);
		cursor: pointer;
		display: flex;
		height: 28px;
		justify-content: center;
		min-width: 28px;
		padding: 4px;
		width: 28px;
	}

	.main:hover {
		background-color: var(--oc-gray-3, #dee2e6);
	}

	.main:active {
		background-color: var(--oc-gray-4, #ced4da);
	}
</style>
