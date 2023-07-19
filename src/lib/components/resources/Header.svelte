<script lang="ts">
    import Fab from '../buttons/Fab.svelte';
    import Filter from './Filter.svelte';
    import Search from '../inputs/Search.svelte';
    import filter from '$lib/assets/image/filter.svg';
    import outside from '$lib/outside';
    import { createEventDispatcher } from 'svelte';

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

    const dispatch = createEventDispatcher();

    let open = false;

    const onOpenMenu = () => {
        open = !open;
    };

    const onCloseMenu = () => {
        open = false;
    };

    const onSearch = (event: CustomEvent) => {
        dispatch('search', event.detail);
    };
</script>

<div class="relative flex flex-nowrap items-center gap-2">
    <Search {placeholder} on:change={onSearch} />
    <div class="shrink" use:outside={onCloseMenu}>
        <Fab image={filter} alt="Filter icon" on:click={onOpenMenu} />
        {#if open}
            <div class="absolute right-0 top-9 text-gray-600">
                <Filter {placeholder} {message} {action}>
                    <slot />
                </Filter>
            </div>
        {/if}
    </div>
</div>
