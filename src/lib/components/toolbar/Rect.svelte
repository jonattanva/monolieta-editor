<script lang="ts">
    import Action from './Action.svelte';
    import src from '$lib/assets/image/square-2-stack.svg';
    import { Tool } from '$lib/type';

    export let active = false;
</script>

<Action {src} {active} alt="Rect action" on:click action={Tool.Rect} />
