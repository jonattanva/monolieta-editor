<script>
    /** @type {string|number} */
    export let value;

    /** @type {string} */
    export let label;
</script>

<li class="relative cursor-default select-none text-gray-900 hover:bg-indigo-100">
    <button class="w-full py-2 pl-3 pr-9" data-value={value} on:click>
        <div class="flex items-center">
            <span class="block truncate font-normal" title={label}>
                {label}
            </span>
        </div>
    </button>
</li>
