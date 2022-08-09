<script lang="ts">
    import Add from '../action/Add.svelte';
    import Color from '../menu/Color.svelte';
    import Label from '../input/Label.svelte';
    import List from '../virtual/List.svelte';
    import More from '../action/More.svelte';
    import Search from '../input/Search.svelte';
    import image from '$lib/assets/label.webp';
    import store, { template } from '$lib/store/label';

    type Selected = {
        label: Monolieta.Label | null;
        x: number;
        y: number;
    };

    export let items: Monolieta.Labels = [];

    let selected: Selected = {
        label: null,
        x: 0,
        y: 0
    };

    function handleClose() {
        selected.label = null;
    }

    function handleNewLabel() {
        store.add(template());
    }

    function handleOpenColor(event: Event, item: Monolieta.Label) {
        const pointer = event as PointerEvent;
        selected = {
            x: pointer.clientX,
            y: pointer.clientY,
            label: item
        };

        event.stopPropagation();
        event.preventDefault();
    }

    function handleColorChange(value: string) {
        if (selected.label) {
            selected.label.color = `#${value}`;
            store.set(selected.label);

            handleClose();
        }
    }

    function search(query: string) {
        items = store.search(query);
    }

    store.subscribe((values) => {
        items = values;
    });
</script>

<div class="main">
    <div class="header">
        <div class="control">
            <div>Classes</div>
            <div class="action">
                <Add click={handleNewLabel} />
                <More click={() => {}} />
            </div>
        </div>
        <Search {search} />
    </div>
    <div class="collection">
        {#if items.length === 0}
            <div class="empty-state">
                <div class="empty-state-picture">
                    <img alt="The label" src={image} />
                </div>
                <div class="empty-state-info">
                    <p>A label that gives information about your annotation.</p>
                    <a href={'#'} on:click={handleNewLabel}>New label</a>
                </div>
            </div>
        {:else}
            <List {items} setting={{ direction: 'vertical', rowHeight: 38 }} padding={8} let:item>
                <Label {item} change={store.set} color={handleOpenColor} />
            </List>
            {#if selected.label !== null}
                <Color
                    close={handleClose}
                    save={handleColorChange}
                    value={selected.label.color}
                    x={selected.x}
                    y={selected.y}
                />
            {/if}
        {/if}
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        font-family: inherit;
        font-size: inherit;
        height: 100%;
        width: 100%;
    }

    .header {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
        width: 100%;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        color: var(--oc-gray-8);
        display: flex;
        font-family: inherit;
        font-size: 18px;
        justify-content: space-between;
        width: 100%;
    }

    .action {
        align-items: center;
        color: inherit;
        display: flex;
        gap: 8px;
        justify-content: center;
    }

    .collection {
        height: 300px;
        width: 100%;
    }

    .empty-state {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 16px;
        justify-content: center;
    }

    .empty-state-picture {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .empty-state-picture img {
        width: 128px;
    }

    .empty-state-info {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: center;
    }

    .empty-state-info a {
        color: var(--accent-color);
        text-decoration: none;
    }

    .empty-state-info a:hover {
        text-decoration: underline;
    }

    .empty-state-info p {
        color: var(--font-color);
        font-family: inherit;
        font-size: 18px;
        font-weight: 500;
        margin: 0;
    }
</style>
