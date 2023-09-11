<script lang="ts">
    import Action from './Action.svelte';
    import src from '$lib/assets/image/square-2-stack.svg';
    import { Tool } from '$lib/type';

    export let action: Tool | null = null;
</script>

<Action
    action={Tool.Rect}
    active={action === Tool.Rect}
    alt="Rect action"
    on:click
    {src}
/>
