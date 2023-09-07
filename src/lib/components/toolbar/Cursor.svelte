<script lang="ts">
    import cursorArrowRays from '$lib/assets/image/cursor-arrow-rays.svg';
    import Action from './Action.svelte';

    export let active = false;
</script>

<Action src={cursorArrowRays} {active} alt="Cursor default" />
