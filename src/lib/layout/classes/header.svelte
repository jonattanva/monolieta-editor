<script lang="ts">
    import EllipsisHorizontal from '$lib/component/icon/ellipsis-horizontal.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Menu from './menu.svelte';
    import PlusSmall from '$lib/component/icon/plus-small.svelte';
    import Search from '$lib/component/search/index.svelte';
    import X from '$lib/component/icon/x.svelte';
    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let title: string;

    let isOpenMenu = false;

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onSearch = (event: CustomEvent) => dispatch('search', event.detail);

    const onCloseLabelManager = (event: Event) =>
        dispatch('close', {
            event
        });

    const onCreateNewLabel = (event: Event) =>
        dispatch('create', {
            event
        });
</script>

<div class="flex items-center justify-between px-4 pt-4">
    <h2 class="text-base font-medium text-slate-900">{title}</h2>
    <Fab on:click={onCloseLabelManager} title="Close" test="close-label">
        <span class="h-5 w-5 text-gray-600">
            <X />
        </span>
    </Fab>
</div>

<div class="relative flex items-center justify-between gap-2 px-4">
    <Search on:search={onSearch} test="search-label" />
    <Fab on:click={onCreateNewLabel} title="New label" test="new-label">
        <span class="h-5 w-5 text-gray-600">
            <PlusSmall />
        </span>
    </Fab>
    <div use:outside={onCloseMenu}>
        <Fab on:click={onOpenMenu} title="More" test="menu-label">
            <span class="h-5 w-5 text-gray-600">
                <EllipsisHorizontal />
            </span>
        </Fab>
        {#if isOpenMenu}
            <Menu on:descending on:ascending />
        {/if}
    </div>
</div>

<div class="flex flex-col gap-2">
    <slot />
</div>
