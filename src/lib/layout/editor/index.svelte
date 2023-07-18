<script lang="ts">
    import Layer from './layer.svelte';
    import Viewport from './viewport.svelte';
    import Toolbar from '$lib/component/toolbar/Toolbar.svelte';

    import type { Resource } from '$lib/type';

    export let resource: Resource | null = null;

    let width = 0;
    let height = 0;
</script>

<div
    class="m-0 flex h-full w-full items-stretch p-0"
    bind:offsetWidth={width}
    bind:offsetHeight={height}
>
    <div class="absolute inset-x-0 top-4 z-50">
        <div class="mx-auto w-60">
            <Toolbar />
        </div>
    </div>

    <div class="relative m-0 flex h-full w-full items-stretch overflow-auto bg-transparent">
        <Layer {resource} displayWidth={width} displayHeight={height}>
            <Viewport />
        </Layer>
    </div>
</div>
