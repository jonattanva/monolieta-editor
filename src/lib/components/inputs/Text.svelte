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
    class="h-7 w-full rounded border bg-accent px-2 transition-colors hover:border-accent-dark focus:border-accent-dark focus:outline-none"
    data-testid={testid}
    on:change
    type="text"
    {placeholder}
    {value}
/>
