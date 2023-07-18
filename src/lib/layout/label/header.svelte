<script lang="ts">
    import Fab from '$lib/component/button/fab/Fab.svelte';
    import Menu from './menu.svelte';
    import Search from '$lib/component/search/index.svelte';
    import ellipsis from '$lib/assets/ellipsis-horizontal.svg';
    import outside from '$lib/action/outside';
    import plus from '$lib/assets/plus-small.svg';
    import x from '$lib/assets/x-mark.svg';
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

<div class="flex w-full flex-col gap-4 text-base">
    <div class="flex items-center justify-between px-6 pt-6">
        <h2 class="text-xl font-medium text-slate-900">{title}</h2>
        <Fab
            alt="Close icon"
            image={x}
            on:click={onCloseLabelManager}
            testid="close-label"
            title="Close"
        />
    </div>
    <div class="relative flex items-center justify-between gap-2 px-6">
        <Search on:search={onSearch} test="search-label" />
        <Fab
            alt="New label icon"
            image={plus}
            on:click={onCreateNewLabel}
            testid="new-label"
            title="New label"
        />
        <div use:outside={onCloseMenu}>
            <Fab
                alt="More icon"
                image={ellipsis}
                on:click={onOpenMenu}
                testid="menu-label"
                title="More"
            />
            {#if isOpenMenu}
                <Menu on:descending on:ascending />
            {/if}
        </div>
    </div>
</div>
<div class="flex flex-col gap-2">
    <slot />
</div>
