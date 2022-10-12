<script>
    import { createEventDispatcher } from 'svelte';

    export /** @type {number} */ let delay = 500;
    export /** @type {string|null} */ let test = '';
    export /** @type {string} */ let placeholder = 'Search';

    const dispatch = createEventDispatcher();

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
            dispatch('search', {
                value: event.target?.value
            });
        }, delay);
    }
</script>

<div class="flex w-full items-start justify-start">
    <div class="absolute flex h-7 w-7 items-center justify-center bg-transparent">
        <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
        class="h-7 w-full rounded border bg-gray-200 pl-8 pr-2 transition-colors hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        type="search"
        autocomplete="off"
        data-testid={test}
        on:input={handleInput}
        {placeholder}
    />
</div>

<style>
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
