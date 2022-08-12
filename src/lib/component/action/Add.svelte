<script lang="ts">
    import Fab from './Fab.svelte';

    export let click: (event: MouseEvent) => void;
    export let test: string | null = null;
    export let title: string | null = null;
</script>

<Fab {click} {test} {title}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        width="18"
        height="18"
    >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
</Fab>
