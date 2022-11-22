<script lang="ts">
    import DocumentDuplicate from '$lib/component/icon/document-duplicate.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Empty from '$lib/layout/classes/empty.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Option from '$lib/layout/classes/option.svelte';
    import Palette from '$lib/component/palette/index.svelte';
    import PlusSmall from '$lib/component/icon/plus-small.svelte';
    import Row from '$lib/layout/classes/row.svelte';
    import Search from '$lib/component/search/index.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import Trash from '$lib/component/icon/trash.svelte';
    import VirtualList from 'svelte-tiny-virtual-list';
    import outside from '$lib/action/outside';
    import store, { template } from '$lib/store/label';

    export let items: Monolieta.Labels = [];

    const position = {
        x: 0,
        y: 0
    };

    const open = {
        more: false,
        color: false
    };

    let collection: Monolieta.Labels = [];
    let message: string | null = null;
    let selected: Monolieta.Label | null = null;

    store.subscribe((values) => {
        collection = values;
    });

    const onCreateNewLabel = () => {
        store.add(template());
    };

    const onSearch = (event: CustomEvent) => {
        const value = event.detail?.value;

        message = null;
        collection = store.search(value);
        if (value.length > 0 && collection.length == 0) {
            message = 'No labels found';
        }
    };

    const onSelected = (custom: CustomEvent) => {
        const { event, item } = custom.detail;

        selected = item;
        position['x'] = event.clientX;
        position['y'] = event.clientY;

        event.preventDefault();
        event.stopPropagation();
    };

    const onMoreAction = (custom: CustomEvent) => {
        onSelected(custom);
        if (selected) {
            open['more'] = true;
            open['color'] = false;
        }
    };

    const onColorAction = (custom: CustomEvent) => {
        onSelected(custom);
        if (selected) {
            open['more'] = false;
            open['color'] = true;
        }
    };

    const onCloseColor = () => {
        open['color'] = false;
    };

    const onCloseMore = () => {
        open['more'] = false;
    };

    const prepare = (values: Monolieta.Labels) => {
        store.init(values);
    };

    $: prepare(items);

    const onRemoveLabel = () => {
        if (selected) {
            store.remove(selected);
        }
        onCloseMore();
    };

    const onDuplicateLabel = () => {
        if (selected) {
            store.duplicate(selected);
        }
        onCloseMore();
    };

    const onColorChanged = (custom: CustomEvent) => {
        const color = custom.detail.value;
        if (selected) {
            selected.color = color;
            store.set(selected);

            onCloseColor();
        }
    };

    const onLabelChanged = (custom: CustomEvent) => {
        store.set(custom.detail.value);
    };
</script>

<div class="flex w-80 flex-col gap-4 py-2">
    <p class="flex items-center px-2 text-base font-medium text-slate-900">Labels</p>
    <div class="relative flex flex-row items-center justify-between gap-2 px-2">
        <Search on:search={onSearch} test="search-label" />
        <Fab on:click={onCreateNewLabel} title="New label" test="new-label">
            <span class="h-5 w-5 text-gray-600">
                <PlusSmall />
            </span>
        </Fab>
        <Option test="menu-label" />
    </div>
    <div class="flex flex-col gap-2" aria-label="list-label">
        {#if collection.length === 0}
            {#if message !== null}
                <div class="flex flex-col items-center justify-center gap-2">
                    <p class="text-center text-base font-medium">
                        {message}
                    </p>
                </div>
            {:else}
                <Empty on:click={onCreateNewLabel} />
            {/if}
        {:else}
            <VirtualList
                width="100%"
                height={600}
                itemCount={collection.length}
                itemSize={36}
                scrollDirection="vertical"
            >
                <div slot="item" let:index let:style {style}>
                    <Row
                        item={collection[index]}
                        on:more={onMoreAction}
                        on:color={onColorAction}
                        on:change={onLabelChanged}
                    />
                </div>
            </VirtualList>
        {/if}
    </div>
</div>

{#if open && open.color}
    <div class="absolute" style="left:{position.x}px;top:{position.y}px">
        <Palette on:close={onCloseColor} on:click={onColorChanged} />
    </div>
{/if}

{#if open && open.more}
    <div class="absolute" style="left:{position.x}px;top:{position.y}px" use:outside={onCloseMore}>
        <Dropdown>
            <Section>
                <Item on:click={onDuplicateLabel}>
                    <span class="mr-2 h-5 w-5">
                        <DocumentDuplicate />
                    </span>
                    Duplicate
                </Item>
                <Item on:click={onRemoveLabel}>
                    <span class="mr-2 h-5 w-5">
                        <Trash />
                    </span>
                    Delete
                </Item>
            </Section>
        </Dropdown>
    </div>
{/if}
