<script lang="ts">
    import Dropdown from '$lib/components/dropdown';
    import Fab from '$lib/components/buttons/Fab.svelte';
    import Filter from './filter/Filter.svelte';
    import Group from './filter/Group.svelte';
    import Search from '$lib/components/inputs/Search.svelte';
    import Sort from '$lib/template/common/Sort.svelte';
    import filter from '$lib/assets/image/filter.svg';
    import outside from '$lib/outside';
    import shortcut, { KEY_ESC } from '$lib/shortcut';
    import { KEY_ASC, KEY_DESC } from '$lib/constant';
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import { translate } from '$lib/stores/locale';

    import type { Labels, Query } from '$lib/type';

    /**
     * Header contents
     */
    export let labels: Labels = [];

    /**
     *
     */
    export let query: Query | null = null;

    const dispatch = createEventDispatcher();

    let isOpenMenu = false;

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onSearch = (event: CustomEvent) => {
        dispatch('search', event.detail);
    };

    const onChange = (event: CustomEvent) => {
        dispatch('change', event.detail);
    };

    const onAscending = () => {
        const current = query || {};
        dispatch('change', {
            ...current,
            sort: KEY_ASC
        });
    };
    
    const onDescending = () => {
        const current = query || {};
        dispatch('change', {
            ...current,
            sort: KEY_DESC
        });
    };
</script>

<div class="flex flex-nowrap items-center gap-2">
    <Search
        on:change={onSearch}
        placeholder={$translate('Search')}
        testid="search"
    />
    <div
        class="relative shrink"
        use:outside={onCloseMenu}
        use:shortcut={{ key: [KEY_ESC], callback: onCloseMenu }}
    >
        <Fab src={filter} alt="Filter icon" on:click={onOpenMenu} />
        {#if isOpenMenu}
            <div
                class="absolute left-0 top-9 text-gray-600"
                transition:fade={{ delay: 15, duration: 60 }}
            >
                <Filter
                    action={$translate('Filter')}
                    message={$translate('You have no labels')}
                    placeholder={$translate('Search')}
                    {labels}
                >
                    <Dropdown.Separator>
                        <Group {query} on:change={onChange} />
                    </Dropdown.Separator>
                    <Dropdown.Separator>
                        <Sort
                            on:asc={onAscending}
                            on:desc={onDescending}
                            {query}
                        />
                    </Dropdown.Separator>
                </Filter>
            </div>
        {/if}
    </div>
</div>
