<script lang="ts">
    import Collection from './Resources.svelte';
    import Header from './Header.svelte';
    import Helper from '$lib/components/Helper.svelte';
    import Sort from '$lib/template/common/Sort.svelte';
    import { values, sort, search } from '$lib/stores/resource';
    import { translate } from '$lib/stores/locale';
    import { values as labels } from '$lib/stores/label';

    $: resources = $values;

    let message: string | null = null;

    const onSearch = (event: CustomEvent) => {
        const value = event.detail.value;
        resources = $search(event.detail.value);

        // prettier-ignore
        message = value.length > 0 && resources.length == 0
            ? $translate('No labels found')
            : null;
    };

    const onAscending = () => {
        resources = $sort('asc');
    };

    const onDescending = () => {
        resources = $sort('desc');
    };
</script>

<div class="flex flex-col gap-4">
    <Header
        action={$translate('Filter')}
        labels={$labels}
        message={$translate('You have no labels')}
        on:search={onSearch}
        placeholder={$translate('Search')}
    >
        <Sort on:asc={onAscending} on:desc={onDescending} />
    </Header>
    <div>
        {#if resources.length === 0}
            {#if message}
                <div class="flex flex-col items-center justify-center gap-2 text-base">
                    <p class="title-secondary">
                        {message}
                    </p>
                </div>
            {:else}
                <Helper message={$translate('You have not yet started a project')} />
            {/if}
        {:else}
            <Collection {resources} selectable={true} />
        {/if}
    </div>
</div>
