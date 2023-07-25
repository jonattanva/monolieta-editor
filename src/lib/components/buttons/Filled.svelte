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
    class="{style} rounded-3xl bg-primary-light px-4 text-white transition hover:bg-primary-dark active:scale-95 dark:bg-primary-dark"
    data-testid={testid}
    on:click
    type="button"
>
    {label}
</button>
