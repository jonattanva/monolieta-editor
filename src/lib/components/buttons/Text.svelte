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
    class="{style} rounded-3xl px-4 transition hover:bg-gray-200 active:scale-95"
    data-testid={testid}
    on:click
    type="button"
>
    {label}
</button>
