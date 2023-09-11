<script lang="ts">
    import Action from './Action.svelte';
    import src from '$lib/assets/image/cursor-arrow-rays.svg';
    import { Tool } from '$lib/type';

    export let action: Tool | null = null;
</script>

<Action
    action={Tool.Cursor}
    active={action === Tool.Cursor}
    alt="Cursor default"
    on:click
    {src}
/>
