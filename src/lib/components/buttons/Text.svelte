<script lang="ts">
    /**
     * How large should the button be?
     */
    export let size: 'small' | 'medium' = 'small';

    /**
     * Button contents
     */
    export let label = '';

    /**
     * Attribute used for testing purposes
     */
    export let testid = '';

    $: style = size === 'small' ? 'py-1 text-sm' : 'py-2 text-base';
</script>

<button
    class="{style} rounded-3xl bg-transparent px-4 text-primary transition hover:bg-primary-light hover:text-primary-dark active:scale-95"
    data-testid={testid}
    on:click
    type="button"
>
    {label}
</button>
