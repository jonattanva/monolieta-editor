<script lang="ts">
    import ArrowDownTray from '$lib/assets/icon/arrow-down-tray.svelte';
    import ArrowUpTray from '$lib/assets/icon/arrow-up-tray.svelte';
    import BarsArrowDown from '$lib/assets/icon/bars-arrow-down.svelte';
    import BarsArrowUp from '$lib/assets/icon/bars-arrow-up.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import EllipsisHorizontal from '$lib/assets/icon/ellipsis-horizontal.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Modal from '$lib/component/modal/index.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import Select from '$lib/component/select/index.svelte';
    import Toggle from '$lib/component/toggle/index.svelte';
    import label from '$lib/config/label.json';
    import outside from '$lib/action/outside';
    import store from '$lib/store/label';

    export let title: string = 'More';

    let isOpenMenu = false;
    let isOpenExportManager = false;

    let includeEmpty = false;
    let formatFile = label.format[0];

    const onCloseExportManager = () => {
        isOpenExportManager = false;
    };

    const onOpenExportManager = () => {
        isOpenExportManager = !isOpenExportManager;
        onCloseMenu();
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onOpenMenu = () => {
        isOpenMenu = !isOpenMenu;
    };

    const onAscending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return a.name.localeCompare(b.name);
        });
        onCloseMenu();
    };

    const onDescending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return b.name.localeCompare(a.name);
        });
        onCloseMenu();
    };

    const onIncludeEmptyChanged = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target) {
            includeEmpty = target.checked;
        }
    };

    const onFormatChanged = (customEvent: CustomEvent) => {
        formatFile = customEvent.detail;
    };

    const onExport = () => {
        store.export(formatFile.value, includeEmpty);
        // TODO: cerrar export manager
    };
</script>

<div use:outside={onCloseMenu}>
    <Fab on:click={onOpenMenu} {title}>
        <span class="h-5 w-5 text-gray-600">
            <EllipsisHorizontal />
        </span>
    </Fab>
    {#if isOpenMenu}
        <div class="absolute top-9 right-0">
            <Dropdown>
                <Section>
                    <Item on:click={onAscending}>
                        <span class="mr-2 h-5 w-5">
                            <BarsArrowDown />
                        </span>
                        Ascending
                    </Item>
                    <Item on:click={onDescending}>
                        <span class="mr-2 h-5 w-5">
                            <BarsArrowUp />
                        </span>
                        Descending
                    </Item>
                </Section>
                <div class="w-full border-t border-slate-400/20 py-3 px-3.5">
                    <Item on:click={() => {}}>
                        <span class="mr-2 h-5 w-5">
                            <ArrowDownTray />
                        </span>
                        Import
                    </Item>
                    <Item on:click={onOpenExportManager}>
                        <span class="mr-2 h-5 w-5">
                            <ArrowUpTray />
                        </span>
                        Export
                    </Item>
                </div>
            </Dropdown>
        </div>
    {/if}
</div>

{#if isOpenExportManager}
    <Modal on:cancel={onCloseExportManager} on:submit={onExport} positiveButton="Export">
        <div class="flex w-full flex-col gap-4">
            <span class="flex items-center justify-between gap-4">
                Export format
                <span class="relative w-2/3">
                    <Select options={label.format} value={formatFile} on:change={onFormatChanged} />
                </span>
            </span>
            <span class="flex items-center justify-between gap-4">
                Include empty labels
                <Toggle on:change={onIncludeEmptyChanged} />
            </span>
        </div>
    </Modal>
{/if}
