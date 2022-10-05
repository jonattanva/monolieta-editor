<script>
    export /** @type {number} */ let tabindex = 0;
    export /** @type {string|null} */ let test = null;
    export /** @type {string} */ let title = '';
</script>

<button
    class="flex rounded items-center justify-center bg-gray-100 p-1 w-7 h-7 text-gray-700 border border-gray-200 outline-gray-300 hover:bg-gray-300"
    on:click
    data-testid={test}
    {tabindex}
    {title}
>
    <slot />
</button>
