<script lang="ts">
    import Action from './Action.svelte';
    import src from '$lib/assets/image/line.svg';
    import { Tool } from '$lib/type';

    export let action: Tool | null = null;

    /**
     * Attribute used for testing purposes
     */
    export let testid = '';
</script>

<Action
    action={Tool.Line}
    active={action === Tool.Line}
    alt="Line action"
    on:click
    {testid}
    {src}
/>
