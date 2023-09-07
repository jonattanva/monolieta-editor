<script lang="ts">
    import Action from './Action.svelte';
    import src from '$lib/assets/image/hand-raised.svg';
    import { Tool } from '$lib/type';

    export let active = false;
</script>

<Action {src} {active} alt="Hand (panning tool)" on:click action={Tool.Hand} />
