<script lang="ts">
    export let delay: number = 500;
    export let placeholder: string = 'Search';
    export let search: (value: string) => void;
    export let test: string | null = null;

    let timeout: NodeJS.Timeout | null = null;

    function handleInput(event: Event) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            const target = event.target as HTMLInputElement;
            search(target.value);
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
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    </div>
    <input
        autocomplete="off"
        data-testid={test}
        on:input={handleInput}
        type="search"
        {placeholder}
    />
</div>

<style>
    .main {
        width: 100%;
    }

    .icon {
        align-items: center;
        background: transparent;
        box-sizing: border-box;
        display: flex;
        height: 38px;
        justify-content: center;
        position: absolute;
        width: 38px;
    }

    input {
        background-color: var(--oc-gray-2);
        border-radius: 4px;
        border: 1px solid var(--oc-gray-2);
        box-sizing: border-box;
        font-family: inherit;
        font-size: inherit;
        height: 38px;
        transition: background-color, border-color 0.2s ease-in-out;
        outline: none;
        padding: 8px 8px 8px 36px;
        width: 100%;
    }

    input:focus {
        background-color: var(--white-color);
        border-color: var(--white-color);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
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
