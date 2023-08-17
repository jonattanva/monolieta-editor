<script lang="ts">
    import Fab from '$lib/components/buttons/Fab.svelte';
    import Filter from './Filter.svelte';
    import Search from '$lib/components/inputs/Search.svelte';
    import filter from '$lib/assets/image/filter.svg';
    import outside from '$lib/outside';
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    import type { Labels } from '$lib/type';

    /**
     * Specifies a short hint
     */
    export let placeholder = '';

    /**
     * Specifies a text string shown when the filter does not display any data.
     */
    export let message = '';

    /**
     * Specifies the name of the main action
     */
    export let action = '';

    export let labels: Labels = [];

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
</script>

<div class="flex flex-nowrap items-center gap-2">
    <Search {placeholder} on:change={onSearch} />
    <div class="relative shrink" use:outside={onCloseMenu}>
        <Fab src={filter} alt="Filter icon" on:click={onOpenMenu} />
        {#if isOpenMenu}
            <div
                class="absolute left-0 top-9 text-gray-600"
                transition:fade={{ delay: 30, duration: 90 }}
            >
                <Filter {placeholder} {message} {action} {labels}>
                    <slot />
                </Filter>
            </div>
        {/if}
    </div>
</div>
