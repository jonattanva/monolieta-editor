<script lang="ts">
    import Helper from '$lib/components/Helper.svelte';
    import Collection from './Resources.svelte';
    import Header from './Header.svelte';
    import Sort from '$lib/template/common/Sort.svelte';
    import type { Resources } from '$lib/type';
    import { translate } from '$lib/stores/locale';
    import { values as labels } from '$lib/stores/label';

    export let resources: Resources = [];

    let message: string | null = null;

    const onAscending = () => {};

    const onDescending = () => {};
</script>

<div class="flex flex-col gap-4">
    <Header
        action={$translate('Filter')}
        labels={$labels}
        message={$translate('You have no labels')}
        placeholder={$translate('Search')}
    >
        <Sort on:asc={onAscending} on:desc={onDescending} />
    </Header>
    <div>
        {#if resources.length === 0}
            {#if message}
                <div class="flex flex-col items-center justify-center gap-2 text-base">
                    <p class="title-accent">
                        {message}
                    </p>
                </div>
            {:else}
                <Helper message={$translate('You have not yet started a project')} />
            {/if}
        {:else}
            <Collection {resources} />
        {/if}
    </div>
</div>
