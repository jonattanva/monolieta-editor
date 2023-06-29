<script lang="ts">
    import Classes from '$lib/layout/classes/index.svelte';
    import Editor from '$lib/layout/editor/index.svelte';
    import Explorer from '$lib/layout/explorer/index.svelte';
    import Main from '$lib/layout/main.svelte';
    import labelStore from '$lib/store/label';
    import resourceStore from '$lib/store/resource';
    import { onDestroy } from 'svelte';

    import type { Labels, Resource, Resources } from '$lib/type';

    let isOpenClassManager = false;

    let labels: Labels = [];
    let resources: Resources = [];
    let selected: Resource | null = null;

    const onOpenClassManager = () => {
        isOpenClassManager = true;
    };

    const onCloseClassManager = () => {
        isOpenClassManager = false;
    };

    const unsubscribeLabelStore = labelStore.subscribe((values) => {
        labels = values;
    });

    const unsubscribeResourceStore = resourceStore.subscribe((values) => {
        resources = values;
    });

    const onSelected = (event: CustomEvent) => {
        const { item } = event.detail;
        selected = item;
    };

    onDestroy(() => {
        unsubscribeLabelStore();
        unsubscribeResourceStore();
    });
</script>

<Main>
    <svelte:fragment slot="menu">
        <Explorer
            items={resources}
            on:click={onSelected}
            on:labels={onOpenClassManager}
            {labels}
            {selected}
        />
    </svelte:fragment>
    <svelte:fragment slot="body">
        <Editor resource={selected} />
    </svelte:fragment>
</Main>

{#if isOpenClassManager}
    <Classes on:close={onCloseClassManager} items={labels} />
{/if}
