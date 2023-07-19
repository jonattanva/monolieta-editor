<script lang="ts">
    import Collection from './Resources.svelte';
    import Empty from './Empty.svelte';
    import Header from './Header.svelte';
    import { translate } from '$lib/stores/locale';
    import Sort from '../common/Sort.svelte';
    import type { Resources } from '$lib/type';

    export let resources: Resources = [];

    const onAscending = () => {};

    const onDescending = () => {};
</script>

<div class="flex flex-col gap-4">
    <Header
        action={$translate('Filter')}
        message={$translate('You have no labels')}
        placeholder={$translate('Search')}
    >
        <Sort on:asc={onAscending} on:desc={onDescending} />
    </Header>
    <div>
        {#if resources.length === 0}
            <Empty message={$translate('You have not yet started a project')} />
        {:else}
            <Collection {resources} />
        {/if}
    </div>
</div>
