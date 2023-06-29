<script lang="ts">
    import Button from '$lib/component/button/contained/index.svelte';
    import Checkbox from '$lib/component/checkbox/index.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Filter from '$lib/component/icon/filter.svelte';
    import Search from '$lib/component/search/index.svelte';
    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';

    import type { Labels } from '$lib/type';

    const dispatch = createEventDispatcher();

    export let items: Labels = [];

    let isOpenMenu = false;

    const onOpenMenu = () => {
        isOpenMenu = true;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onSearch = (event: CustomEvent) => {
        dispatch('search', event.detail);
    };
</script>

<div class="relative" use:outside={onCloseMenu}>
    <Fab on:click={onOpenMenu} testid="filter" label="Filter">
        <span class="h-5 w-5 text-gray-600">
            <Filter />
        </span>
    </Fab>
    {#if isOpenMenu}
        <div class="absolute">
            <Dropdown>
                <div class="w-full border-t border-slate-400/20 px-3.5 py-3">
                    <Search on:search={onSearch} test="search-label" />
                    <div class="my-4">
                        {#if items.length === 0}
                            <div class="text-center">You have no labels</div>
                        {/if}
                        {#each items as item}
                            <Checkbox>
                                <div class="flex w-full items-center justify-between">
                                    <div class="truncate">{item.name}</div>
                                    <div>0</div>
                                </div>
                            </Checkbox>
                        {/each}
                    </div>
                    <div class="flex items-start justify-end">
                        <div>
                            <Button size="small">Filter</Button>
                        </div>
                    </div>
                </div>
            </Dropdown>
        </div>
    {/if}
</div>
