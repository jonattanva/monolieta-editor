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
    class="border-border-dark h-7 w-full rounded border bg-transparent px-2 transition-colors focus:outline-none"
    data-testid={testid}
    on:change
    type="text"
    {placeholder}
    {value}
/>
