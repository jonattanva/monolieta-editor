<script lang="ts">
    import Checkbox from '$lib/components/Checkbox.svelte';
    import Dropdown from '$lib/components/dropdown';
    import Filled from '$lib/components/buttons/Filled.svelte';
    import Search from '$lib/components/inputs/Search.svelte';
    import { createEventDispatcher } from 'svelte';

    import type { Labels } from '$lib/type';

    export let labels: Labels = [];

    /**
     * Specifies a text string shown when the filter does not display any data.
     */
    export let message = '';

    /**
     * Specifies a short hint
     */
    export let placeholder = '';

    /**
     * Specifies the name of the main action
     */
    export let action = '';

    const dispatch = createEventDispatcher();

    $: collections = labels.filter((it) => {
        return it.name !== '';
    });

    const onSearch = (event: CustomEvent) => {
        dispatch('search', event.detail);
    };
</script>

<Dropdown.Main>
    <Dropdown.Section>
        <div class="px-4">
            <Search on:change={onSearch} {placeholder} />
            <div class="mb-2 mt-4">
                {#if collections.length === 0}
                    <div class="text-center">{message}</div>
                {:else}
                    <svelte.fragment>
                        {#each collections as label (label.id)}
                            <Checkbox>
                                <div class="flex w-full items-center justify-between">
                                    <div class="truncate">{label.name}</div>
                                    <div>{label.resources.length}</div>
                                </div>
                            </Checkbox>
                        {/each}
                        <div class="mt-4 flex items-start justify-end">
                            <Filled label={action} />
                        </div>
                    </svelte.fragment>
                {/if}
            </div>
        </div>
    </Dropdown.Section>
    <Dropdown.Separator>
        <slot />
    </Dropdown.Separator>
</Dropdown.Main>
