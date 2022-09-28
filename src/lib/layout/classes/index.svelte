<script lang="ts">
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Duplicate from '$lib/assets/duplicate.svelte';
    import Empty from '$lib/assets/label.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Palette from '$lib/component/palette/index.svelte';
    import Plus from '$lib/component/action/plus.svelte';
    import More from '$lib/component/action/more.svelte';
    import Row from '$lib/layout/classes/row.svelte';
    import Search from '$lib/component/search/index.svelte';
    import Trash from '$lib/assets/trash.svelte';
    import store, { template } from '$lib/store/label';

    export let items: Monolieta.Labels = [];

    let x: number = 0;
    let y: number = 0;
    let openMore: boolean = false;
    let openPalette: boolean = false;
    let message: string | null = null;
    let collection: Monolieta.Labels = [];
    let selected: Monolieta.Label | null = null;

    store.subscribe((values) => {
        collection = values;
    });

    function handleOpenMore(event: Event, item: Monolieta.Label) {
        const pointer = event as PointerEvent;
        x = pointer.clientX;
        y = pointer.clientY;

        selected = item;
        openMore = true;
        openPalette = false;

        event.stopPropagation();
        event.preventDefault();
    }

    function handleOpenPalette(event: Event, item: Monolieta.Label) {
        const pointer = event as PointerEvent;
        x = pointer.clientX;
        y = pointer.clientY;

        openPalette = true;
        openMore = false;
        selected = item;

        event.stopPropagation();
        event.preventDefault();
    }

    function handleClosePalette() {
        openPalette = false;
        selected = null;
        x = 0;
        y = 0;
    }

    function handleCloseMore() {
        openMore = false;
        selected = null;
        x = 0;
        y = 0;
    }

    function handleRemoveLabel() {
        if (selected) {
            store.remove(selected);
        }
        handleCloseMore();
    }

    function handleDuplicateLabel() {
        if (selected) {
            store.duplicate(selected);
        }
        handleCloseMore();
    }

    function handleColorChanged(color: string) {
        if (selected) {
            selected.color = color;
            store.set(selected);
        }
    }

    function handleLabelChanged(label: Monolieta.Label) {
        store.set(label);
    }

    function handleNewLabel() {
        store.add(template());
    }

    function handleSearch(value: string) {
        message = null;
        collection = store.search(value);
        if (value.length > 0 && collection.length == 0) {
            message = 'No labels found';
        }
    }

    const prepare = (values: Monolieta.Labels) => {
        store.init(values);
    };

    $: prepare(items);
</script>

<div class="flex flex-col gap-4 w-80 py-2">
    <div class="flex items-center px-2 font-medium text-base text-slate-900">Labels</div>
    <div class="flex flex-row gap-2 justify-between items-center px-2">
        <Search search={handleSearch} />
        <Plus click={handleNewLabel} title="New label" />
        <More click={() => {}} title="More" />
    </div>
    <div class="flex flex-col gap-2">
        {#if collection.length === 0}
            {#if message !== null}
                <div class="flex flex-col gap-2 items-center justify-center">
                    <p class="text-base font-medium text-center">
                        {message}
                    </p>
                </div>
            {:else}
                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-center">
                        <Empty />
                    </div>
                    <div class="flex flex-col gap-2 items-center justify-center">
                        <p class="text-base font-medium text-center">
                            A label that gives information about your annotation
                        </p>
                        <p
                            class="color-accent text-center text-underline cursor-pointer"
                            on:click={handleNewLabel}
                        >
                            New label
                        </p>
                    </div>
                </div>
            {/if}
        {/if}

        {#each collection as item (item.id)}
            <Row
                {item}
                more={handleOpenMore}
                color={handleOpenPalette}
                change={handleLabelChanged}
            />
        {/each}
    </div>
</div>

{#if openPalette}
    <Palette {x} {y} close={handleClosePalette} click={handleColorChanged} />
{/if}

{#if openMore}
    <Dropdown {x} {y} close={handleCloseMore}>
        <Item click={handleRemoveLabel}>
            <Trash className="mr-2" width={20} height={20} />
            Delete
        </Item>
        <Item click={handleDuplicateLabel}>
            <Duplicate className="mr-2" width={20} height={20} />
            Duplicate
        </Item>
    </Dropdown>
{/if}
