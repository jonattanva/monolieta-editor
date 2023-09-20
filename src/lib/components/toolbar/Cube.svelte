<script lang="ts">
    import Action from './Action.svelte';
    import src from '$lib/assets/image/cube.svg';
    import { Tool } from '$lib/type';

    export let action: Tool | null = null;

    /**
     * Attribute used for testing purposes
     */
    export let testid = '';
</script>

<Action
    action={Tool.Hand}
    active={action === Tool.Hand}
    alt="Cuboid action"
    on:click
    {testid}
    {src}
/>
