<script lang="ts">
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Fab from '$lib/component/button/fab/Fab.svelte';
    import Filter from './filter.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Search from '$lib/component/search/index.svelte';
    import Summary from '$lib/component/summary/index.svelte';
    import config from '$lib/layout/explorer/resources/menu';
    import outside from '$lib/action/outside';
    import folder from '$lib/assets/folder.svg';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let itemCount = 0;

    let isOpenMenu = false;

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onOpen = (event: Event) => {
        const target = event.currentTarget as HTMLButtonElement;
        const value = target.dataset.value;
        if (value) {
            dispatch(value, event);
            onCloseMenu();
        }
    };

    const items = config.items
        .filter((row) => row.visible)
        .sort((a, b) => {
            return a.order - b.order;
        });
</script>

<div class="h-20 w-full px-6 pt-6">
    <div class="flex w-full flex-nowrap items-center justify-between">
        <h1 class="select-none text-2xl">Monolieta</h1>
        <div class="relative" use:outside={onCloseMenu}>
            <Fab on:click={onOpenMenu} testid="project" alt="Project icon" image={folder} />
            {#if isOpenMenu}
                <div class="absolute">
                    <Dropdown>
                        <div class="w-full border-t border-slate-400/20 px-3.5 py-3">
                            {#each items as item}
                                <Item on:click={onOpen} value={item.key} testid={item.key}>
                                    <div class="flex w-full items-center justify-between">
                                        <div>{item.name}</div>
                                        {#if item.shortcut}
                                            <div class="text-sm text-gray-400">{item.shortcut}</div>
                                        {/if}
                                    </div>
                                </Item>
                                {#if item.separator}
                                    <div class="my-1 w-full border-t border-slate-400/20" />
                                {/if}
                            {/each}
                        </div>
                    </Dropdown>
                </div>
            {/if}
        </div>
    </div>
</div>

<div class="w-full px-6 py-4">
    <div class="flex w-full flex-nowrap items-center gap-2">
        <Search />
        <Filter />
    </div>
    <Summary>
        Viewing {itemCount} resources
    </Summary>
</div>
