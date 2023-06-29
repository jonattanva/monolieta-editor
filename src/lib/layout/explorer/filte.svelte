<script lang="ts">
    import BarsArrowDown from '$lib/component/icon/bars-arrow-down.svelte';
    import BarsArrowUp from '$lib/component/icon/bars-arrow-up.svelte';
    import Button from '$lib/component/button/contained/index.svelte';
    import Checkbox from '$lib/component/checkbox/index.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Filter from '$lib/component/icon/filter.svelte';
    import Search from '$lib/component/search/index.svelte';
    import outside from '$lib/action/outside';
    import labelStore from '$lib/store/label';
    import { onDestroy } from 'svelte';

    import type { Labels } from '$lib/type';

    const MESSAGE_DEFAULT = 'You have no labels';

    let labels: Labels = [];
    let isOpenMenu = false;

    let message = MESSAGE_DEFAULT;

    const onOpenMenu = () => {
        isOpenMenu = true;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const unsubscribeLabelStore = labelStore.subscribe((values) => {
        labels = values;
    });

    const onSearch = (custom: CustomEvent) => {
        const value = custom.detail.value;
        labels = labelStore.search(value);

        message = MESSAGE_DEFAULT;
        if (value.length > 0 && labels.length == 0) {
            message = 'No labels found';
        }
    };

    onDestroy(() => {
        unsubscribeLabelStore();
    });
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
                <div class="w-full px-3.5 py-3">
                    <Search on:search={onSearch} test="search-label" />
                    <div class="mb-2 mt-4">
                        {#if labels.length === 0}
                            <div class="text-center">{message}</div>
                        {/if}
                        {#each labels as label}
                            <Checkbox>
                                <div class="flex w-full items-center justify-between">
                                    <div class="truncate">{label.name}</div>
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
                <div class="w-full border-t border-slate-400/20 px-3.5 py-3">
                    <Item>
                        <span class="mr-2 h-5 w-5">
                            <BarsArrowDown />
                        </span>
                        Ascending
                    </Item>
                    <Item>
                        <span class="mr-2 h-5 w-5">
                            <BarsArrowUp />
                        </span>
                        Descending
                    </Item>
                </div>
            </Dropdown>
        </div>
    {/if}
</div>
