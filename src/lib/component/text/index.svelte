<script>
    export /** @type {string} */ let test = '';
    export /** @type {string|null} */ let placeholder = '';
    export /** @type {string} */ let value = '';
</script>

<input
    class="rounded w-full h-7 px-2 border bg-gray-100 focus:outline-none hover:border-gray-300 focus:border-gray-300 transition-colors"
    data-testid={test}
    on:change
    type="text"
    {placeholder}
    {value}
/>
