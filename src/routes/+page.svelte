<script>
    import Explorer from '$lib/layout/explorer/index.svelte';
    import Slide from '$lib/component/slide-over/index.svelte';
    import Classes from '$lib/layout/classes/index.svelte';

    let isOpenClassManager = false;

    const onOpenClassManager = () => {
        isOpenClassManager = !isOpenClassManager;
    };

    const onCloseClassManager = () => {
        isOpenClassManager = false;
    };
</script>

<div class="flex h-full w-80 flex-col flex-nowrap items-stretch">
    <Explorer on:class={onOpenClassManager} />
</div>

<div
    class="flex h-full w-full flex-row flex-nowrap content-center items-start justify-center self-stretch bg-slate-100"
/>

{#if isOpenClassManager}
    <Slide>
        <Classes on:close={onCloseClassManager} />
    </Slide>
{/if}
