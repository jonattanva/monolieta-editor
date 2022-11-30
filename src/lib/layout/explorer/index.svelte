<script lang="ts">
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Filter from '$lib/component/icon/filter.svelte';
    import Folder from '$lib/component/icon/folder.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Search from '$lib/component/search/index.svelte';
    import Tag from '$lib/component/icon/tag.svelte';
    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let isOpenMenu = false;

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onOpenClassManager = () => {
        onCloseMenu();
        dispatch('class');
    };
</script>

<div class="h-20 w-full p-4"> 
    <div class="flex w-full flex-nowrap items-center justify-between">
        <h1 class="select-none text-xl">Monolieta</h1>
        <div class="relative" use:outside={onCloseMenu}>
            <Fab on:click={onOpenMenu} test="project">
                <span class="h-5 w-5 text-gray-600">
                    <Folder />
                </span>
            </Fab>
            {#if isOpenMenu}
                <div class="absolute">
                    <Dropdown>
                        <div class="w-full border-t border-slate-400/20 py-3 px-3.5">
                            <Item on:click={onOpenClassManager} test="open-label">
                                <span class="mr-2 h-5 w-5">
                                    <Tag />
                                </span>
                                <div class="flex w-full items-center justify-between">
                                    <div>Labels</div>
                                    <div class="text-sm text-gray-400">⌘ + l</div>
                                </div>
                            </Item>
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
        <Fab>
            <span class="h-5 w-5 text-gray-600">
                <Filter />
            </span>
        </Fab>
    </div>
    <div class="flex items-center justify-end py-2 text-sm text-gray-600">Viewing 0 resources</div>
</div>

<div class="h-screen w-full">
    <div class="flex flex-col items-center justify-center p-4">
        <p class="text-center text-sm font-medium text-gray-600">
            You have not yet started a project
        </p>
    </div>
</div>
