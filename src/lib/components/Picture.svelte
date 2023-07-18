<script lang="ts">
    import { reader } from '$lib/image';

    /**
     * Picture contents
     */
    export let source: File | string = '';

    /**
     * Attribute used for testing purposes
     */
    export let testid = '';

    /**
     * Specifies an alternate text for an image
     */
    export let alt = '';

    let image: string;

    $: reader(source).then((result) => (image = result));
</script>

<div class="h-full w-full">
    {#if image}
        <img
            class="h-full w-full select-none object-cover p-0"
            crossorigin="anonymous"
            data-testid={testid}
            loading="lazy"
            on:load
            src={image}
            {alt}
        />
    {/if}
</div>
