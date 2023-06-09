<script lang="ts">
    export let testid = '';
    export let placeholder: string | null = '';
    export let value = '';
</script>

<input
    class="h-7 w-full rounded border bg-gray-50 px-2 transition-colors hover:border-gray-300 focus:border-gray-300 focus:outline-none"
    data-testid={testid}
    on:change
    type="text"
    {placeholder}
    {value}
/>
