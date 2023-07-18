<script lang="ts">
    /**
     * Is this the principal call to action on the page?
     */
    export let primary = false;

    /**
     * Button contents
     */
    export let image = '';

    /**
     * Attribute used for testing purposes
     */
    export let testid = '';

    /**
     * Specifies an alternate text for an image
     */
    export let alt = '';

    export let tabindex: number | undefined | null = undefined;

    $: style = primary ? 'brightness-0 invert' : '';
    $: mode = primary ? 'bg-primary hover:bg-primary-dark' : 'bg-accent hover:bg-accent-dark';
</script>

<button
    class="{mode} flex h-7 w-7 items-center justify-center rounded-lg transition active:scale-95"
    data-testid={testid}
    on:click|preventDefault|stopPropagation
    {tabindex}
    type="button"
>
    <span class="flex h-3.5 w-3.5 items-center justify-center">
        {#if image}
            <img src={image} {alt} class={style} />
        {/if}
    </span>
</button>
