<script>
    export /** @type {string} */ let test = '';
    export /** @type {string} */ let placeholder = '';
    export /** @type {string} */ let value = '';
    export /** @type {(arg0: string) => void} */ let change;

    /**
     * @param {{ target: any; }} event
     */
    function handleChangeValue(event) {
        if (change) {
            change(event.target?.value);
        }
    }
</script>

<input
    class="main"
    type="text"
    data-testid={test}
    {placeholder}
    {value}
    on:change={handleChangeValue}
/>

<style>
    .main {
        background-color: var(--oc-gray-2);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-2);
        box-sizing: border-box;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        height: var(--input-height, 28px);
        outline: none;
        padding: 0 8px;
        transition: background-color, border-color 0.2s ease-in-out;
        width: 100%;
    }

    .main:focus {
        border: 1px solid var(--oc-gray-3);
    }
</style>
