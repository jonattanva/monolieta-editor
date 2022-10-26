<script lang="ts">
    import ArrowDownTray from '$lib/component/icon/arrow-down-tray.svelte';
    import ArrowUpTray from '$lib/component/icon/arrow-up-tray.svelte';
    import BarsArrowDown from '$lib/component/icon/bars-arrow-down.svelte';
    import BarsArrowUp from '$lib/component/icon/bars-arrow-up.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import EllipsisHorizontal from '$lib/component/icon/ellipsis-horizontal.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Message from '$lib/component/message/index.svelte';
    import Modal from '$lib/component/modal/index.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import Select from '$lib/component/select/index.svelte';
    import Toggle from '$lib/component/toggle/index.svelte';
    import label from '$lib/config/label.json';
    import outside from '$lib/action/outside';
    import store, { template } from '$lib/store/label';
    import { reader } from '$lib/file';

    export let title: string = 'More';

    let fields = label.field;

    let isOpenExportManager = false;
    let isOpenImportManager = false;
    let isOpenMenu = false;
    let isShowMessage = false;

    let disabledPositiveButton = true;
    let isViewImportProject = true;
    let showPositiveButton = false;

    let includeEmpty = false;
    let formatFile = label.format[0];

    const instance: Monolieta.Import = {
        columns: [],
        ref: {},
        rows: []
    };

    let fileInput: HTMLInputElement | null = null;

    const onCloseMessage = () => {
        isShowMessage = false;
    };

    const onOpenImportManager = () => {
        isOpenImportManager = !isOpenImportManager;
        onCloseMenu();
    };

    const onCloseImportManager = () => {
        isOpenImportManager = false;

        isViewImportProject = true;
        showPositiveButton = false;

        fields = fields.map((field) => {
            field.checked = false;
            return field;
        });

        instance['columns'] = [];
        instance['ref'] = {};
        instance['rows'] = []
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

    const onExport = () => store.export(formatFile.value, includeEmpty);

    const onImportType = (event: Event) => {
        const target = event.currentTarget as HTMLButtonElement;
        if (target) {
            const key = target.dataset.key;
            if (fileInput) {
                fileInput.accept = `.${key}`;
                fileInput.click();
            }
        }
    };

    const onFileSelected = async (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target) {
            if (target.files) {
                const [file] = target.files;
                const result = (await reader(file)) as string;

                switch (file.type) {
                    case 'text/csv': {
                        const [columns, ...rows] = result.split('\n');

                        instance.columns = columns.split(',').map((column) => ({
                            label: column,
                            value: column
                        }));

                        const total = instance.columns.length;
                        for (let i = 0; i < rows.length; i++) {
                            const row = rows[i];
                            const values = row.split(',');

                            if (values.length !== total) {
                                continue;
                            }

                            const register = instance.columns.reduce(
                                (previous, current, index) => ({
                                    ...previous,
                                    [current.value]: values[index]
                                }),
                                {}
                            );

                            instance.rows.push(register);
                        }
                        break;
                    }
                }

                isViewImportProject = false;
                showPositiveButton = true;
            }
        }
    };

    const onSelectField = (key: string, event: CustomEvent) => {
        const { value } = event.detail;

        const current = instance.ref[key];
        instance.ref[key] = {
            ...current,
            name: value
        };

        fields = fields.map((field) => {
            if (field.key === key) {
                field.checked = true;

                const current = instance.ref[key];
                instance.ref[key] = {
                    ...current,
                    enabled: true
                };
            }
            return field;
        });

        disabledPositiveButton = getColumns().length === 0;
    };

    const getColumns = () =>
        Object.keys(instance.ref).filter((key) => {
            return instance.ref[key].name && instance.ref[key].enabled;
        });

    const onImportSelectField = (key: string, event: Event) => {
        const target = event.target as HTMLInputElement;

        const current = instance.ref[key];
        instance.ref[key] = {
            ...current,
            enabled: target.checked
        };

        disabledPositiveButton = getColumns().length === 0;
    };

    const onImport = async () => {
        const columns = getColumns();
        if (columns.length === 0) {
            return;
        }

        const labels: Monolieta.Labels = [];
        for (let index = 0; index < instance.rows.length; index++) {
            const element = instance.rows[index];

            let label = template();
            columns.forEach((column) => {
                const ref = instance.ref[column];
                label = {
                    ...label,
                    [column]: element[ref.name]
                };
            });

            labels.push(label);
        }

        store.init(labels);

        isShowMessage = true;
        onCloseImportManager();
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

{#if isShowMessage}
    <Message
        message="The import of the labels has been completed"
        on:positive={onCloseMessage}
        on:negative={onCloseMessage}
        positiveButton="Undo"
        showNegativeButton={false}
        showPositiveButton={true}
        title="Successfully imported!"
    />
{/if}

{#if isOpenExportManager}
    <Modal on:cancel={onCloseExportManager} on:submit={onExport} positiveButton="Export">
        <div class="flex w-full flex-col gap-4">
            <p class="text-lg text-slate-900">Export</p>
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
    <div class="absolute">
        <Modal
            on:cancel={onCloseImportManager}
            on:submit={onImport}
            positiveButton="Import"
            {disabledPositiveButton}
            {showPositiveButton}
        >
            <div class="flex w-full flex-col">
                <p class="text-lg text-slate-900">Import</p>
                {#if isViewImportProject}
                    <span class="flex items-center pb-4 text-gray-500">
                        To get started, click the product you want to import you projects from.
                    </span>
                    <div class="w-full border-t border-slate-400/20">
                        <span class="flex flex-row gap-2 pt-4">
                            {#each label.import as row (row.key)}
                                {#if row.visible}
                                    <button
                                        class="flex h-9 basis-1/3 cursor-pointer items-center justify-start rounded border border-gray-200 bg-transparent px-4 text-sm outline-gray-300 transition-colors hover:bg-gray-50 focus:border-gray-100 focus:outline-none"
                                        title={row.title}
                                        on:click={onImportType}
                                        data-key={row.key}
                                    >
                                        <span class="flex h-9 w-9 items-center justify-center">
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
                                {/if}
                            {/each}
                            <input
                                class="hidden"
                                type="file"
                                multiple={false}
                                on:change={onFileSelected}
                                bind:this={fileInput}
                            />
                        </span>
                    </div>
                {:else}
                    <div class="w-full">
                        <div class="flex items-center pb-4 text-gray-500">
                            Select the CSV fields to import, then set how you would like these
                            convered to fields in Monolieta.
                        </div>
                        <div class="w-full border-t border-slate-400/20">
                            <div class="grid grid-cols-3 gap-4 pt-4">
                                <p class="text-center">Monolieta field</p>
                                <p class="text-center">External field</p>
                                <p class="text-center">Import</p>
                                {#each fields as field (field.key)}
                                    <div class="flex items-center justify-center">{field.name}</div>
                                    <div class="flex items-center justify-center">
                                        <Select
                                            options={instance.columns}
                                            placeholder="Select a field"
                                            on:change={(event) => onSelectField(field.key, event)}
                                        />
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <Toggle
                                            checked={field.checked}
                                            on:change={(event) =>
                                                onImportSelectField(field.key, event)}
                                        />
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </Modal>
    </div>
{/if}
