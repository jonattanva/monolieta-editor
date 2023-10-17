<script lang="ts">
    import Layer from './Layer.svelte';
    import Viewport from './Viewport.svelte';
    import type { Resource } from '$lib/type';

    export let displayHeight = 0;
    export let displayWidth = 0;
    export let resource: Resource | null = null;
</script>

<div
    class="relative m-0 flex h-full w-full items-stretch overflow-auto bg-transparent"
>
    <Layer {displayHeight} {displayWidth} {resource}>
        <Viewport />
    </Layer>
</div>
