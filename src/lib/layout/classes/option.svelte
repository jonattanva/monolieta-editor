<script lang="ts">
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Modal from '$lib/component/modal/index.svelte';
    import More from '$lib/assets/more.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import Select from '$lib/component/select/index.svelte';
    import Toggle from '$lib/component/toggle/index.svelte';
    import format from '$lib/layout/classes/dataset/format.json';
    import outside from '$lib/action/outside';
    import store from '$lib/store/label';

    export let title: string = 'More';

    let isOpenMenu = false;
    let isOpenExportManager = false;

    let includeEmpty = false;
    let formatFile = format[0];

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
            <More />
        </span>
    </Fab>
    {#if isOpenMenu}
        <div class="absolute top-9 right-0">
            <Dropdown>
                <Section>
                    <Item on:click={onAscending}>
                        <!-- Heroicon name: outline/bars-arrow-down -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                            />
                        </svg>
                        Ascending
                    </Item>
                    <Item on:click={onDescending}>
                        <!-- Heroicon name: outline/bars-arrow-up -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                            />
                        </svg>
                        Descending
                    </Item>
                </Section>
                <div class="border-t border-slate-400/20 w-full py-3 px-3.5">
                    <Item on:click={() => {}}>
                        <!-- Heroicon name: outline/arrow-down-tray -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>

                        Import
                    </Item>
                    <Item on:click={onOpenExportManager}>
                        <!-- Heroicon name: outline/arrow-up-tray -->
                        <svg
                            class="mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            />
                        </svg>
                        Export
                    </Item>
                </div>
            </Dropdown>
        </div>
    {/if}
</div>

{#if isOpenExportManager}
    <Modal on:cancel={onCloseExportManager} on:submit={onExport}>
        <div class="flex flex-col w-full gap-4">
            <span class="flex gap-4 items-center justify-between">
                Export format
                <span class="w-2/3 relative">
                    <Select options={format} value={formatFile} on:change={onFormatChanged} />
                </span>
            </span>
            <span class="flex gap-4 items-center justify-between">
                Include empty
                <Toggle on:change={onIncludeEmptyChanged} />
            </span>
        </div>
    </Modal>
{/if}
