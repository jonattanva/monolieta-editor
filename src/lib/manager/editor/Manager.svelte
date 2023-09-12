<script lang="ts">
    import Editor from '$lib/components/editor/Editor.svelte';
    import Toolbar from '$lib/components/toolbar/Toolbar.svelte';
    import { set, action, cursor } from '$lib/stores/action';
    import type { Resource } from '$lib/type';

    export let resource: Resource | null = null;

    let displayWidth = 0;
    let displayHeight = 0;

    const onClick = (event: CustomEvent) => {
        set(event.detail);
    };

    $: style = cursor($action);
</script>

<div
    class="m-0 flex h-full w-full items-stretch p-0 {style}"
    bind:offsetWidth={displayWidth}
    bind:offsetHeight={displayHeight}
>
    <div class="absolute z-10 mx-4 my-5">
        <Toolbar on:click={onClick} action={$action} />
    </div>
    <Editor {displayWidth} {displayHeight} {resource} />
</div>
