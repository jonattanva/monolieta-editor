<script lang="ts">
    import Row from './row.svelte';

    import type { Options, Groups, Option, Group } from '$lib/type';

    export let options: Options | Groups = [];
    export let value: Option | Group | null = null;
</script>

<ul
    aria-activedescendant="listbox-option-3"
    aria-labelledby="listbox-label"
    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    role="listbox"
    tabindex="-1"
>
    {#if options.length === 0}
        <li class="relative w-full cursor-default select-none py-2 pl-3 pr-9 text-gray-900">
            <div class="flex items-center">
                <span class="block truncate font-normal">No options</span>
            </div>
        </li>
    {/if}
    {#each options as option}
        {#if 'options' in option && option.options.length > 0}
            <li class="cursor-default px-2 pt-2 text-[0.6875rem] font-semibold text-slate-500">
                {option.label}
            </li>
            {#each option.options as child}
                <Row
                    label={child.label}
                    on:click
                    parent={option.value}
                    selected={value}
                    value={child.value}
                />
            {/each}
        {:else}
            <Row value={option.value} label={option.label} selected={value} on:click />
        {/if}
    {/each}
</ul>
