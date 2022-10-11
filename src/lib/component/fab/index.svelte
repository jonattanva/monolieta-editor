<script>
    export /** @type {number} */ let tabindex = 0;
    export /** @type {string|null} */ let test = '';
    export /** @type {string} */ let title = '';
</script>

<button
    class="flex rounded items-center justify-center bg-gray-100 p-1 w-7 h-7 text-gray-700 border border-gray-200 outline-gray-300 hover:bg-gray-300"
    data-testid={test}
    on:click
    type="button"
    {tabindex}
    {title}
>
    <slot />
</button>
