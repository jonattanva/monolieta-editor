<script>
    export /** @type {string} */ let test = '';
    export /** @type {string|null} */ let placeholder = '';
    export /** @type {string} */ let value = '';
</script>

<input
    class="h-7 w-full rounded border bg-gray-100 px-2 transition-colors hover:border-gray-300 focus:border-gray-300 focus:outline-none"
    data-testid={test}
    on:change
    type="text"
    {placeholder}
    {value}
/>
