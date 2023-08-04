<script lang="ts">
    /**
     * Attribute used for testing purposes
     */
    export let testid = '';

    /**
     * Specifies a short hint
     */
    export let placeholder: string | null = '';

    /**
     * Specifies the value
     */
    export let value = '';
</script>

<input
    class="h-7 w-full rounded border bg-transparent px-2 text-font-light transition-colors focus:border-2 focus:outline-none dark:border-shape-dark dark:text-font-dark"
    data-testid={testid}
    on:change
    type="text"
    {placeholder}
    {value}
/>
