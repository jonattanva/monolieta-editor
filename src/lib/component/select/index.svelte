<script lang="ts">
    import outside from '$lib/action/outside';
    import Component from './option.svelte';
    import { createEventDispatcher } from 'svelte';

    import type { Options, Groups, Option, Group } from '$lib/type';

    export let options: Options | Groups = [];
    export let value: Option | Group | null = null;
    export let placeholder = 'Select...';
    export let testid = '';

    const dispatch = createEventDispatcher();

    let open = false;

    const onOpenMenu = () => {
        open = !open;
        dispatch('click', {
            value: open
        });
    };

    const onCloseMenu = () => {
        open = false;
    };

    const onSelected = (event: Event) => {
        const target = event.currentTarget as HTMLButtonElement;
        if (target) {
            const key = target.dataset.value;
            const parent = target.dataset.parent;

            let current = null;
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                if (!parent && option.value === key) {
                    value = option;
                    current = option;
                    break;
                }

                if (option.value === parent && 'options' in option) {
                    for (let k = 0; k < option.options.length; k++) {
                        const element = option.options[k];
                        if (element.value === key) {
                            current = {
                                label: option.label,
                                value: option.value,
                                options: [element]
                            };
                            value = current;
                            break;
                        }
                    }
                }
            }

            if (current) {
                dispatch('change', current);

                onCloseMenu();
            }
        }
    };
</script>

<div class="relative w-full" use:outside={onCloseMenu}>
    <button
        aria-expanded="true"
        aria-haspopup="listbox"
        aria-labelledby="listbox-label"
        class="relative h-7 w-full cursor-default rounded border border-gray-300 bg-white pl-3 pr-10 text-left focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 sm:text-sm"
        data-testid={testid}
        on:click={onOpenMenu}
        type="button"
    >
        <span class="flex items-center">
            {#if value && value.label}
                {#if 'options' in value}
                    {@const [option] = value.options}
                    <span class="block truncate">{option.label}</span>
                {:else}
                    <span class="block truncate">{value.label}</span>
                {/if}
            {:else}
                <span class="block truncate text-gray-400">{placeholder}</span>
            {/if}
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
        <Component {options} {value} on:click={onSelected} />
    {/if}
</div>
