<script>
    export /** @type {string} */ let test = '';
    export /** @type {string} */ let placeholder = '';
</script>

<input class="main" type="text" data-testid={test} {placeholder} />

<style>
    .main {
        background-color: var(--oc-white, #fff);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-2, #e9ecef);
        box-sizing: border-box;
        font-family: inherit;
        font-size: inherit;
        height: var(--input-height, 38px);
        outline: none;
        padding: 8px;
        transition: background-color, border-color 0.2s ease-in-out;
        width: 100%;
    }

    .main:hover,
    .main:focus {
        background-color: var(--oc-white, #fff);
        border: 1px solid var(--oc-gray-2, #e9ecef);
    }

    .main:focus {
        border: 1px solid var(--oc-gray-4, #ced4da);
    }
</style>
