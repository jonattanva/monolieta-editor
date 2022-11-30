<script lang="ts">
    export let test: string = '';
    export let placeholder: string | null = '';
    export let value: string = '';
</script>

<input
    class="h-7 w-full rounded border bg-gray-100 px-2 transition-colors hover:border-gray-300 focus:border-gray-300 focus:outline-none"
    data-testid={test}
    on:change
    type="text"
    {placeholder}
    {value}
/>
