<script>
    export /** @type {(arg0: Event) => void} */ let open;
    export /** @type {string} */ let value = 'E5E5E5';
    export /** @type {(arg0: string) => void} */ let change;

    /** 
     * @param {string} value
     */
    const normalize = (value) => value.replace(/^#/, '');

    /**
     * @param {string} init
     */
    const prepare = (init) => (value = normalize(init));

    /**
     * @param {{ target: any; }} event
     */
    function handleNameChange(event) {
        const value = event.target.value;
        if (change) {
            change(value);
        }
    }

    $: prepare(value);
</script>

<div class="main">
    <div class="color">
        <button on:click={open} tabindex="-1" style="--color-picker: #{value}" />
    </div>
    <input autocomplete="off" type="text" {value} on:change={handleNameChange} />
</div>

<style>
    .main {
        position: relative;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: flex-start;
    }

    .color {
        align-items: center;
        background: transparent;
        box-sizing: border-box;
        display: flex;
        height: var(--input-height, 28px);
        justify-content: center;
        position: absolute;
        width: var(--input-width, 28px);
    }

    .color > button {
        background-color: var(--color-picker);
        border-radius: 4px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 18px;
        width: 18px;
    }

    input {
        background-color: var(--oc-gray-2);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-2);
        box-sizing: border-box;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        height: var(--input-height, 28px);
        outline: none;
        padding: 0 8px 0 32px;
        text-transform: uppercase;
        transition: background-color, border-color 0.2s ease-in-out;
        width: 100%;
    }

    input:hover {
        border: 1px solid var(--oc-gray-3);
    }

    input:focus {
        border: 1px solid var(--oc-gray-3);
    }
</style>
