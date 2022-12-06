<script lang="ts">
    import Document from '$lib/component/icon/document.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Filter from '$lib/component/icon/filter.svelte';
    import Folder from '$lib/component/icon/folder.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Search from '$lib/component/search/index.svelte';
    import Tag from '$lib/component/icon/tag.svelte';
    import config from '$lib/config/menu.json';
    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let itemCount: number = 0;

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
        }
    };

    const items = config.items.sort((a, b) => {
        return a.order - b.order;
    });

    const getIcon = (key: string) => {
        let icon = null;

        switch (key) {
            case 'tag':
                icon = Tag;
                break;

            case 'resource':
                icon = Document;
                break;
        }

        return icon;
    };
</script>

<div class="h-20 w-full p-4">
    <div class="flex w-full flex-nowrap items-center justify-between">
        <h1 class="select-none text-xl">Monolieta</h1>
        <div class="relative" use:outside={onCloseMenu}>
            <Fab on:click={onOpenMenu} testid="project" label="Project">
                <span class="h-5 w-5 text-gray-600">
                    <Folder />
                </span>
            </Fab>
            {#if isOpenMenu}
                <div class="absolute">
                    <Dropdown>
                        <div class="w-full border-t border-slate-400/20 py-3 px-3.5">
                            {#each items as item}
                                <Item on:click={onOpen} value={item.key} test="open-label">
                                    <span class="mr-2 h-5 w-5">
                                        <svelte:component this={getIcon(item.icon)} />
                                    </span>
                                    <div class="flex w-full items-center justify-between">
                                        <div>{item.name}</div>
                                        {#if item.shortcut}
                                            <div class="text-sm text-gray-400">{item.shortcut}</div>
                                        {/if}
                                    </div>
                                </Item>
                            {/each}
                        </div>
                    </Dropdown>
                </div>
            {/if}
        </div>
    </div>
</div>

<div class="w-full p-4">
    <div class="flex w-full flex-nowrap items-center gap-2">
        <Search />
        <Fab testid="filter" label="Filter">
            <span class="h-5 w-5 text-gray-600">
                <Filter />
            </span>
        </Fab>
    </div>
    <div class="flex items-center justify-end py-2 text-sm text-gray-600">
        Viewing {itemCount} resources
    </div>
</div>
