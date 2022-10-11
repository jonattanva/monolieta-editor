<script>
    /**
     * @typedef Monolieta.Option
     * @type {object}
     * @property {string} label
     * @property {string} value
     */

    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';

    /** @type {Monolieta.Option[]} */
    export let options = [];

    /** @type {Monolieta.Option|null} */
    export let value = null;

    const dispatch = createEventDispatcher();

    let open = false;

    const onOpenMenu = () => {
        open = !open;
    };

    const onCloseMenu = () => {
        open = false;
    };

    const onSelected = (/** @type {{ currentTarget: any; }} */ event) => {
        const target = event.currentTarget;
        if (target) {
            const current = options.find((option) => {
                return option.value == target.dataset.value;
            });

            if (current) {
                value = current;
                dispatch('change', {
                    label: value.label,
                    value: value.value
                });
            }

            onCloseMenu();
        }
    };
</script>

<div class="relative w-full" use:outside={onCloseMenu}>
    <button
        aria-expanded="true"
        aria-haspopup="listbox"
        aria-labelledby="listbox-label"
        class="relative w-full h-7 rounded border border-gray-300 bg-white pl-3 pr-10 text-left focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 sm:text-sm cursor-default"
        on:click={onOpenMenu}
        type="button"
    >
        <span class="flex items-center">
            <span class="block truncate">{value && value.label ? value.label : ''}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <!-- Heroicon name: mini/chevron-up-down -->
            <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    clip-rule="evenodd"
                />
            </svg>
        </span>
    </button>

    {#if open}
        <ul
            class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
        >
            {#each options as option}
                <li
                    class="text-gray-900 hover:bg-indigo-100 relative cursor-default select-none py-2 pl-3 pr-9"
                    data-value={option.value}
                    on:click={onSelected}
                >
                    <div class="flex items-center">
                        <span class="font-normal block truncate" title={option.label}>
                            {option.label}
                        </span>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>
