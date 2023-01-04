<script lang="ts">
    import Picture from '$lib/component/picture/index.svelte';
    import { createEventDispatcher } from 'svelte';
    import {
        calculateAspectRatio,
        calculateEditorSize,
        calculateImagePosition,
        getScale
    } from '$lib/display';

    export let displayHeight: number = 0;
    export let displayWidth: number = 0;
    export let resource: Monolieta.Resource | null = null;
    export let scale: number = 1;

    const dispatch = createEventDispatcher();

    let imageHeight: number = 0;
    let imageWidth: number = 0;

    const onResize = (rect: Monolieta.Rect) => dispatch('resize', rect);

    const onLoadResource = (event: Event) => {
        const target = event.target as HTMLImageElement;
        imageHeight = target.naturalHeight;
        imageWidth = target.naturalWidth;

        dispatch('completed', {
            width: imageWidth,
            height: imageHeight
        });
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

    $: onResize(position);
</script>

<div class="absolute" style={`width:${editor.width}px;height:${editor.height}px`}>
    <div
        class="absolute"
        style={`top:${position.y}px;left:${position.x}px;width:${position.width}px;height:${position.height}px`}
    >
        {#if resource}
            <Picture source={resource.source} on:load={onLoadResource} testid="image-editor" />
        {/if}
        <slot />
    </div>
</div>
