<script lang="ts">
    import Collection from './Resources.svelte';
    import Header from './Header.svelte';
    import Helper from '$lib/components/Helper.svelte';
    import { translate } from '$lib/stores/locale';
    import { values as labels } from '$lib/stores/label';
    import { values, search } from '$lib/stores/resource';
    import type { Query } from '$lib/type';

    $: resources = $values;

    let query: Query | null = null;
    let message: string | null = null;

    const onSearch = (event: CustomEvent) => {
        const value = event.detail.value;
        resources = $search(event.detail.value);

        // prettier-ignore
        message = value.length > 0 && resources.length == 0
            ? $translate('No labels found')
            : null;
    };

    const onChange = (event: CustomEvent) => {
        query = event.detail;

        console.log('change', query);
    };
</script>

<div class="flex flex-col gap-4">
    <Header
        labels={$labels}
        on:change={onChange}
        on:search={onSearch}
        {query}
    />
    <div>
        {#if resources.length === 0}
            {#if message}
                <div
                    class="flex flex-col items-center justify-center gap-2 text-base"
                >
                    <p class="title-secondary">
                        {message}
                    </p>
                </div>
            {:else}
                <Helper
                    message={$translate('You have not yet started a project')}
                />
            {/if}
        {:else}
            <Collection {resources} selectable={true} />
        {/if}
    </div>
</div>
