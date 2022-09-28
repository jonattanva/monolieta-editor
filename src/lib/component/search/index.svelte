<script>
    export /** @type {(arg0: string) => void} */ let search;
    export /** @type {number} */ let delay = 500;
    export /** @type {string} */ let test = '';
    export /** @type {string} */ let placeholder = 'Search';

    /**
     * @type {NodeJS.Timeout | null}
     */
    let timeout = null;

    /**
     * @param {{ target: any; }} event
     */
    function handleInput(event) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            search(event.target?.value);
        }, delay);
    }
</script>

<div class="main">
    <div class="icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke-width="1.5"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
        </svg>
    </div>
    <input
        type="search"
        autocomplete="off"
        data-testid={test}
        on:input={handleInput}
        {placeholder}
    />
</div>

<style>
    .main {
        align-items: flex-start;
        display: flex;
        font-family: inherit;
        font-size: inherit;
        justify-content: flex-start;
        width: 100%;
    }

    .icon {
        align-items: center;
        background: transparent;
        box-sizing: border-box;
        display: flex;
        height: var(--input-icon-height, 28px);
        justify-content: center;
        position: absolute;
        width: var(--input-icon-width, 28px);
    }

    input {
        background-color: var(--oc-gray-2);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-2);
        box-sizing: border-box;
        font-family: inherit;
        font-size: inherit;
        height: var(--input-height, 28px);
        outline: none;
        padding: 8px 8px 8px 32px;
        transition: background-color, border-color 0.2s ease-in-out;
        width: 100%;
    }

    input:focus {
        border: 1px solid var(--oc-gray-3);
    }

    input:focus::-webkit-search-cancel-button {
        opacity: 1;
        pointer-events: all;
    }

    input::-webkit-search-cancel-button {
        background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='hsl(220, 13%, 65%)'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' /></svg>");
        background-size: contain;
        background-position: 50% 50%;
        background-repeat: no-repeat;

        appearance: none;
        height: 18px;
        opacity: 0;
        pointer-events: none;
        width: 18px;
    }
</style>
