<script lang="ts">
    import Layer from './Layer.svelte';
    import Viewport from './Viewport.svelte';
    import type { Resource } from '$lib/type';

    export let displayHeight = 0;
    export let displayWidth = 0;
    export let resource: Resource | null = null;
    export let scale = 1;
</script>

<div
    class="relative m-0 flex h-full w-full items-stretch overflow-auto bg-transparent"
>
    <Layer {displayHeight} {displayWidth} {scale} {resource}>
        <Viewport />
    </Layer>
</div>
