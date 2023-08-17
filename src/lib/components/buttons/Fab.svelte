<script lang="ts">
    /**
     * Button contents
     */
    export let src = '';

    /**
     * Attribute used for testing purposes
     */
    export let testid = '';

    /**
     * Specifies an alternate text for an image
     */
    export let alt = '';

    /**
     * Specifies the tab order of an element
     */
    export let tabindex: number | undefined | null = undefined;
</script>

<button
    class="flex h-7 w-7 items-center justify-center rounded-lg border border-shape-light bg-accent-light active:scale-95 dark:border-shape-dark dark:bg-accent-dark"
    data-testid={testid}
    on:click
    {tabindex}
    type="button"
>
    <span class="flex h-3.5 w-3.5 items-center justify-center">
        {#if src}
            <img class="dark:invert" {src} {alt} />
        {/if}
    </span>
</button>
