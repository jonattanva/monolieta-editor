<script>
    import Fab from '$lib/component/fab/index.svelte';

    export /** @type {string} */ let title = '';
</script>

<Fab on:click {title}>
    <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
    >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
</Fab>
