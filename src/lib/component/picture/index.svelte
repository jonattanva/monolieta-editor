<script lang="ts">
    import { imageReader } from '$lib/file';

    export let alt: string = '';
    export let source: File | string = '';
    export let testid: string = '';

    let src: string;

    const prepare = async (source: File | string) => {
        src = await imageReader(source);
    };

    $: prepare(source);
</script>

<div class="h-full w-full">
    {#if src}
        <img
            class="h-full w-full select-none object-cover p-0"
            crossorigin="anonymous"
            data-testid={testid}
            loading="lazy"
            on:load
            {alt}
            {src}
        />
    {/if}
</div>
