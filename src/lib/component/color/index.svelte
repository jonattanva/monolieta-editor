<script>
    export /** @type {string} */ let value = 'E5E5E5';

    /**
     * @param {string} value
     */
    const normalize = (value) => value.replace(/^#/, '');

    /**
     * @param {string} init
     */
    const prepare = (init) => (value = normalize(init));

    $: prepare(value);
</script>

<div class="relative flex w-full items-center justify-start">
    <div class="absolute flex h-7 w-7 items-center justify-center bg-transparent">
        <button
            class="h-[18px] w-[18px] rounded border border-transparent"
            on:click
            style="background-color: #{value}"
            tabindex="-1"
        />
    </div>
    <input
        autocomplete="off"
        class="h-7 w-full rounded border bg-gray-100 pr-2 pl-8 uppercase transition-colors hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        on:change
        type="text"
        {value}
    />
</div>
