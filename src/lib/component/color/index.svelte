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

<div class="flex justify-start items-center relative w-full">
    <div class="flex absolute items-center justify-center bg-transparent w-7 h-7">
        <button
            class="rounded border border-transparent h-[18px] w-[18px]"
            on:click
            style="background-color: #{value}"
            tabindex="-1"
        />
    </div>
    <input
        autocomplete="off"
        class="focus:outline-none rounded uppercase w-full h-7 border bg-gray-100 pr-2 pl-8 hover:border-gray-300 focus:border-gray-300 transition-colors"
        on:change
        type="text"
        {value}
    />
</div>
