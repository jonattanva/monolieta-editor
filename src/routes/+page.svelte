<script lang="ts">
    import Classes from '$lib/layout/classes/index.svelte';
    import Explorer from '$lib/layout/explorer/index.svelte';
    import Slide from '$lib/component/slide-over/index.svelte';
    import labelStore from '$lib/store/label';
    import resourceStore from '$lib/store/resource';
    import { onDestroy } from 'svelte';

    let isOpenClassManager = false;

    let labels: Monolieta.Labels = [];
    let resources: Monolieta.Resources = [];

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

    onDestroy(() => {
        unsubscribeLabelStore();
        unsubscribeResourceStore();
    });
</script>

<div class="flex h-full w-[260px] min-w-[260px] flex-col flex-nowrap items-stretch">
    <Explorer on:labels={onOpenClassManager} items={resources} />
</div>

<div
    class="flex h-full w-full flex-row flex-nowrap items-start justify-center self-stretch bg-slate-100"
/>

{#if isOpenClassManager}
    <Slide>
        <Classes on:close={onCloseClassManager} items={labels} />
    </Slide>
{/if}
