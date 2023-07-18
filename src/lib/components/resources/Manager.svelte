<script lang="ts">
    import Collection from './Resources.svelte';
    import Empty from './Empty.svelte';
    import Header from './Header.svelte';
    import { translate } from '$lib/stores/locale';
    import type { Resources } from '$lib/type';

    export let resources: Resources = [];
</script>

<div class="flex flex-col gap-4">
    <Header />
    <div>
        {#if resources.length === 0}
            <Empty message={$translate('You have not yet started a project')} />
        {:else}
            <Collection {resources} />
        {/if}
    </div>
</div>
