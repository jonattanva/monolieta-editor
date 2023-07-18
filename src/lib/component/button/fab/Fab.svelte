<script>
    /**
     * Input element is unusable
     */
    export let disabled = false;

    /**
     * @type {string} Button contents
     */
    export let image;

    /**
     * @type {boolean} Include border
     */
    export let border = true;

    /**
     * @type {boolean} Activate button
     */
    export let active = false;

    export let alt = '';
    export let tabindex = 0;
    export let testid = '';
    export let title = '';

    $: borderStyle = border ? 'border border-gray-200' : '';
    $: activeStyle = active ? 'bg-gray-200' : 'bg-gray-50';
</script>

<button
    class="flex h-7 w-7 items-center justify-center rounded {borderStyle} {activeStyle} p-1 text-gray-700 outline-gray-300 hover:bg-gray-200"
    data-testid={testid}
    on:click
    type="button"
    {disabled}
    {tabindex}
    {title}
>
    <span class="flex h-5 w-5 items-center justify-center text-gray-600">
        {#if image}
            <img {alt} src={image} />
        {/if}
    </span>
</button>
