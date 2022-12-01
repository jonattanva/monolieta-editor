<script lang="ts">
    import DocumentDuplicate from '$lib/component/icon/document-duplicate.svelte';
    import Dropdown from '$lib/component/dropdown/index.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Message from './message.svelte';
    import Palette from '$lib/component/palette/index.svelte';
    import Row from '$lib/layout/classes/row.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import Trash from '$lib/component/icon/trash.svelte';
    import VirtualList from 'svelte-tiny-virtual-list';
    import outside from '$lib/action/outside';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let message: string | null = null;
    export let collection: Monolieta.Labels = [];

    const position = {
        x: 0,
        y: 0
    };

    let selected: Monolieta.Label | null = null;

    let height = 0;
    let isOpenMenu = false;
    let isOpenColorPicker = false;

    const onSelected = (custom: CustomEvent) => {
        const { event, item } = custom.detail;

        selected = item;
        position['x'] = event.clientX;
        position['y'] = event.clientY;

        event.preventDefault();
        event.stopPropagation();
    };

    const onOpenColorPicker = (custom: CustomEvent) => {
        onSelected(custom);
        isOpenMenu = false;
        isOpenColorPicker = true;
    };

    const onCloseColorPicker = () => {
        isOpenColorPicker = false;
    };

    const onOpenMenu = (custom: CustomEvent) => {
        onSelected(custom);
        isOpenMenu = true;
        isOpenColorPicker = false;
    };

    const onCloseMenu = () => {
        isOpenMenu = false;
    };

    const onAfterScroll = () => {
        onCloseMenu();
        onCloseColorPicker();
    };

    const onLabelChanged = (custom: CustomEvent) => {
        const label = custom.detail.value;
        dispatch('change', {
            label
        });
    };

    const onColorChanged = (custom: CustomEvent) => {
        const color = custom.detail.value;
        if (selected) {
            selected.color = color;
            dispatch('change', {
                label: selected
            });
            onCloseColorPicker();
        }
    };

    const onDuplicateLabel = () => {
        if (selected) {
            dispatch('duplicate', {
                label: selected
            });
        }
        onCloseMenu();
    };

    const onRemoveLabel = () => {
        if (selected) {
            dispatch('remove', {
                label: selected
            });
        }
        onCloseMenu();
    };

    const onCreateNewLabel = (event: Event) =>
        dispatch('create', {
            event
        });
</script>

{#if collection.length === 0}
    {#if message !== null}
        <div class="flex flex-col items-center justify-center gap-2">
            <p class="text-center text-sm font-medium">
                {message}
            </p>
        </div>
    {:else}
        <div class="px-4">
            <Message on:click={onCreateNewLabel} />
        </div>
    {/if}
{:else}
    <div class="h-screen w-full" bind:clientHeight={height}>
        <VirtualList
            on:afterScroll={onAfterScroll}
            width="100%"
            {height}
            itemCount={collection.length}
            itemSize={36}
            scrollDirection="vertical"
        >
            <div slot="item" let:index let:style {style} role="row" aria-rowindex={index}>
                <Row
                    item={collection[index]}
                    on:change={onLabelChanged}
                    on:color={onOpenColorPicker}
                    on:menu={onOpenMenu}
                />
            </div>
        </VirtualList>
    </div>
{/if}

{#if isOpenColorPicker}
    <div class="absolute left-0" style="top:{position.y}px">
        <Palette on:close={onCloseColorPicker} on:click={onColorChanged} />
    </div>
{/if}

{#if isOpenMenu}
    <div class="absolute right-0" style="top:{position.y}px" use:outside={onCloseMenu}>
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
