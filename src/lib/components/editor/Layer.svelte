<script lang="ts">
    import Picture from '../Picture.svelte';
    import display from '$lib/display';
    import math from '$lib/math';
    import type { Resource } from '$lib/type';

    export let displayWidth = 0;
    export let displayHeight = 0;
    export let resource: Resource | null = null;

    let imageWidth = 0;
    let imageHeight = 0;

    const onLoad = (event: Event) => {
        const target = event.target as HTMLImageElement;
        imageWidth = target.naturalWidth;
        imageHeight = target.naturalHeight;
    };

    $: image = {
        height: imageHeight,
        width: imageWidth
    };

    // prettier-ignore
    $: aspectRatio = display.aspectRatio({
        height: displayHeight, 
        width: displayWidth
    }, image);

    $: vector = math.scale(aspectRatio, 2);

    $: editor = {
        height: aspectRatio.height + vector.y,
        width: aspectRatio.width + vector.x
    };

    $: position = display.image(aspectRatio, editor, image);
</script>

<div
    class="absolute"
    style={`width:${editor.width}px;height:${editor.height}px`}
>
    <div
        class="absolute"
        style={`top:${position.y}px;left:${position.x}px;width:${position.width}px;height:${position.height}px`}
    >
        {#if resource}
            <Picture src={resource.source} on:load={onLoad} />
        {/if}
        <slot />
    </div>
</div>
