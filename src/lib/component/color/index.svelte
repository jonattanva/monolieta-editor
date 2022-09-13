<script>
    export /** @type {() => void} */ let open;
    export /** @type {string} */ let value = 'E5E5E5';
    export /** @type {(arg0: string) => void} */ let change;

    /**
     * @param {{ target: any; }} event
     */
    function handleNameChange(event) {
        const value = event.target.value;
        if (change) {
            change(value);
        }
    }
</script>

<div class="main">
    <div class="color">
        <button on:click={open} tabindex="-1" style="--color-picker: #{value}" />
    </div>
    <input autocomplete="off" type="text" maxlength="6" {value} on:change={handleNameChange} />
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
        height: 38px;
        justify-content: center;
        position: absolute;
        width: 38px;
    }

    .color > button {
        background-color: var(--color-picker);
        border-radius: 4px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }

    input {
        background-color: var(--oc-gray-0, #f8f9fa);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-0, #f8f9fa);
        box-sizing: border-box;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        height: 38px;
        outline: none;
        padding: 8px;
        padding: 8px 8px 8px 36px;
        transition: background-color, border-color 0.2s ease-in-out;
        width: 100%;
        text-transform: uppercase;
    }

    input:hover,
    input:focus {
        background-color: var(--oc-white, #fff);
        border: 1px solid var(--oc-gray-2, #e9ecef);
    }

    input:focus {
        border: 1px solid var(--oc-gray-4, #ced4da);
    }
</style>
