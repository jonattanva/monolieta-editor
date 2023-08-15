<script lang="ts">
    /**
     * Button contents
     */
    export let src = '';

    /**
     * Specifies an alternate text for an image
     */
    export let alt = '';
</script>

<button
    class="flex h-8 w-8 items-center justify-center rounded-lg bg-transparent hover:bg-gray-100 active:scale-95"
    on:click|preventDefault|stopPropagation
    type="button"
    title={alt}
>
    <span class="flex h-5 w-5 items-center justify-center">
        {#if src}
            <img {src} {alt} />
        {/if}
    </span>
</button>
