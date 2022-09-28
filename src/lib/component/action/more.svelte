<script>
    import Fab from '$lib/component/fab/index.svelte';

    export /** @type {string} */ let title = '';
    export /** @type {svelte.JSX.MouseEventHandler<HTMLButtonElement>} */ let click;
</script>

<Fab {click} {title}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="20"
        width="20"
        stroke-width="1.5"
        stroke="currentColor"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
    </svg>
</Fab>
