<script lang="ts">
    import ArrowDownTray from '$lib/component/icon/arrow-down-tray.svelte';
    import ArrowUpTray from '$lib/component/icon/arrow-up-tray.svelte';
    import BarsArrowDown from '$lib/component/icon/bars-arrow-down.svelte';
    import BarsArrowUp from '$lib/component/icon/bars-arrow-up.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import EllipsisHorizontal from '$lib/component/icon/ellipsis-horizontal.svelte';
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
    let isOpenImportManager = false;

    let includeEmpty = false;
    let formatFile = label.format[0];

    const onOpenImportManager = () => {
        isOpenImportManager = !isOpenImportManager;
        onCloseMenu();
    };

    const onCloseOpenImportManager = () => {
        isOpenImportManager = false;
    };

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

    const onImport = (event: Event) => {
        const target = event.currentTarget as HTMLButtonElement;
        if (target) {
            const key = target.dataset.key;
            console.log(key);
        }
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
                    <Item on:click={onOpenImportManager}>
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

{#if isOpenImportManager}
    <Modal on:cancel={onCloseOpenImportManager} positiveButton="Import">
        <div class="flex w-full flex-col gap-4">
            <span class="flex items-center gap-4 text-base">Import project from</span>
            <span class="flex flex-row gap-2">
                {#each label.import as row (row.key)}
                    <button
                        class="flex h-9 basis-1/3 cursor-pointer items-center rounded border border-gray-200 bg-transparent text-gray-700 outline-gray-300 transition-colors hover:bg-gray-100 focus:border-gray-100 focus:outline-none"
                        title={row.title}
                        on:click={onImport}
                        data-key={row.key}
                    >
                        <span class="mr-2 flex h-full w-9 items-center justify-center bg-gray-100">
                            {#if row.size === 'normal'}
                                <img
                                    class="h-6 w-6"
                                    alt={row.title}
                                    src={row.icon}
                                    loading="lazy"
                                />
                            {:else}
                                <img
                                    class="h-3 w-3"
                                    alt={row.title}
                                    src={row.icon}
                                    loading="lazy"
                                />
                            {/if}
                        </span>
                        {row.name}
                    </button>
                {/each}
            </span>
        </div>
    </Modal>
{/if}
