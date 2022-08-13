<script lang="ts">
    import Fab from './fab.svelte';

    export let click: (event: MouseEvent) => void;
    export let tabindex: number = 0;
    export let test: string | null = null;
</script>

<Fab {click} {test} {tabindex}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        width="18"
        height="18"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
    </svg>
</Fab>
