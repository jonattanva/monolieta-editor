<script lang="ts">
    /**
     * Button contents
     */
    export let src = '';

    /**
     * Specifies an alternate text for an image
     */
    export let alt = '';
    export let active = false;
    export let action = '';

    $: select = active ? 'bg-gray-100' : 'bg-transparent';
</script>

<button
    class="flex h-7 w-7 items-center justify-center rounded-lg {select} hover:bg-gray-100 active:scale-95"
    data-action={action}
    on:click
    title={alt}
    type="button"
>
    <div class="flex h-[17.45px] w-[17.45px] items-center justify-center">
        {#if src}
            <img {src} {alt} />
        {/if}
    </div>
</button>
