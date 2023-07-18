<script lang="ts">
    import Dropdown from '../dropdown/Dropdown.svelte';
    import Fab from '../buttons/Fab.svelte';
    import Search from '../inputs/Search.svelte';
    import ellipsisHorizontal from '$lib/assets/image/ellipsis-horizontal.svg';
    import outside from '$lib/outside';
    import plus from '$lib/assets/image/plus.svg';
    import { createEventDispatcher } from 'svelte';

    /**
     * Specifies a short hint
     */
    export let placeholder = '';

    const dispatch = createEventDispatcher();

    let open = false;

    const onOpenMenu = () => {
        open = !open;
    };

    const onCloseMenu = () => {
        open = false;
    };

    const onCreateNewLabel = (event: Event) => {
        dispatch('create', event);
    };

    const onSearch = (event: CustomEvent) => {
        dispatch('search', event.detail);
    };
</script>

<div class="relative flex items-center justify-between gap-2 px-6">
    <Search {placeholder} on:change={onSearch} />
    <div class="shrink">
        <Fab image={plus} on:click={onCreateNewLabel} alt="New label icon" />
    </div>
    <div class="shrink" use:outside={onCloseMenu}>
        <Fab image={ellipsisHorizontal} alt="More icon" on:click={onOpenMenu} />
        {#if open}
            <div class="absolute right-0 top-9 text-gray-600">
                <Dropdown>
                    <slot />
                </Dropdown>
            </div>
        {/if}
    </div>
</div>
