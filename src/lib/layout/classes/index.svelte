<script lang="ts">
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Duplicate from '$lib/assets/duplicate.svelte';
    import Empty from '$lib/layout/classes/empty.svelte';
    import Fab from '$lib/component/fab/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Option from '$lib/layout/classes/option.svelte';
    import Palette from '$lib/component/palette/index.svelte';
    import Plus from '$lib/assets/plus.svelte';
    import Row from '$lib/layout/classes/row.svelte';
    import Search from '$lib/component/search/index.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import Trash from '$lib/assets/trash.svelte';
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

    let message: string | null = null;
    let collection: Monolieta.Labels = [];
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

            onCloseColor()
        }
    };

    function handleLabelChanged(label: Monolieta.Label) {
        store.set(label);
    }
</script>

<div class="flex flex-col gap-4 w-80 py-2">
    <div class="flex items-center px-2 font-medium text-base text-slate-900">Labels</div>
    <div class="relative flex flex-row gap-2 justify-between items-center px-2">
        <Search on:search={onSearch} />
        <Fab on:click={onCreateNewLabel} title="New label">
            <span class="h-5 w-5">
                <Plus />
            </span>
        </Fab>
        <Option open={false} />
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
                <Empty on:click={onCreateNewLabel} />
            {/if}
        {/if}

        {#each collection as item (item.id)}
            <Row
                {item}
                on:more={onMoreAction}
                on:color={onColorAction}
                change={handleLabelChanged}
            />
        {/each}
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
                <Item on:click={onRemoveLabel}>
                    <span class="mr-2 h-5 w-5">
                        <Trash />
                    </span>
                    Delete
                </Item>
                <Item on:click={onDuplicateLabel}>
                    <span class="mr-2 h-5 w-5">
                        <Duplicate />
                    </span>
                    Duplicate
                </Item>
            </Section>
        </Dropdown>
    </div>
{/if}
