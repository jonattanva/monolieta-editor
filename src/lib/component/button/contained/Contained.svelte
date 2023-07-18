<script>
    /**
     * Input element is unusable
     */
    export let disabled = false;

    /**
     * @type {'small' | 'medium' } How large should the button be?
     */
    export let size = 'medium';

    /**
     * @type {string} Button contents
     */
    export let label;
    export let testid = '';

    $: mode = size === 'medium' ? 'h-10 text-base' : 'h-7 text-sm';
</script>

<button
    class="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 font-medium text-white outline-offset-2 outline-primary-dark hover:bg-primary-dark {mode}"
    data-testid={testid}
    on:click
    type="button"
    {disabled}
>
    {label}
</button>
