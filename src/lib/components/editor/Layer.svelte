<script lang="ts">
    import Picture from '../Picture.svelte';
    import { calculateAspectRatio, calculateImagePosition } from '$lib/display';
    import { getScale, calculateEditorSize } from '$lib/math';
    import type { Resource } from '$lib/type';

    export let displayHeight = 0;
    export let displayWidth = 0;
    export let resource: Resource | null = null;
    export let scale = 1;

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
    $: aspectRatio = calculateAspectRatio({
        height: displayHeight, 
        width: displayWidth
    }, image);

    $: editor = calculateEditorSize(getScale(aspectRatio, scale), aspectRatio);
    $: position = calculateImagePosition(aspectRatio, editor, image);
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
