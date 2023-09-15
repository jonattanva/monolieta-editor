<script lang="ts">
    import { reader as image } from '$lib/image';
    import { reader as video } from '$lib/video';

    /**
     * Picture contents
     */
    export let src: File;

    /**
     * Attribute used for testing purposes
     */
    export let testid = '';

    /**
     * Specifies an alternate text for an image
     */
    export let alt = '';

    const reader = (file: File) =>
        file.type.startsWith('image')
            ? image(src)
            : video(src, { width: 360, height: 360 });

    let source: string;
    $: reader(src).then((result) => {
        source = result;
    });
</script>

<div class="relative h-full w-full select-none">
    {#if source}
        <img
            class="h-full w-full select-none object-cover p-0"
            crossorigin="anonymous"
            data-testid={testid}
            loading="lazy"
            on:load
            src={source}
            {alt}
        />
    {/if}
</div>
