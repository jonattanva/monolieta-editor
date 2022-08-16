<script lang="ts">
    import Color from '$lib/component/menu/color.svelte';
    import Fab from '$lib/component/action/fab.svelte';
    import Label from '$lib/component/input/label.svelte';
    import List from '$lib/component/virtual/List.svelte';
    import Plus from '$lib/assets/plus.svelte';
    import Search from '$lib/component/input/search.svelte';
    import image from '$lib/assets/label.webp';
    import store, { template } from '$lib/store/label';

    type Message = string | null;
    type Selected = {
        label: Monolieta.Label | null;
        x: number;
        y: number;
    };

    export let items: Monolieta.Labels = [];

    let message: Message = null;
    let selected: Selected = {
        label: null,
        x: 0,
        y: 0
    };

    function handleClose() {
        selected.label = null;
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
        message = null;
        items = store.search(query);
        if (query.trim().length > 0 && items.length === 0) {
            message = 'No labels found';
        }
    }

    store.subscribe((values) => {
        items = values;
    });
</script>

<div class="main">
    <div class="header">
        <div class="control">
            <div>Labels</div>
            <div class="action">
                <Fab title="New label" click={() => store.add(template())} test="create-label">
                    <Plus width={18} height={18} />
                </Fab>
                <!--<More click={() => {}} />-->
            </div>
        </div>
        <Search {search} />
    </div>
    <div class="collection">
        {#if items.length === 0}
            {#if message !== null}
                <div class="empty-state">
                    <div class="empty-state-info">{message}</div>
                </div>
            {:else}
                <div class="empty-state">
                    <div class="empty-state-picture">
                        <img alt="The label" src={image} />
                    </div>
                    <div class="empty-state-info">
                        <p>A label that gives information about your annotation.</p>
                        <a href={'#'} on:click={() => store.add(template())}>New label</a>
                    </div>
                </div>
            {/if}
        {:else}
            <List {items} setting={{ direction: 'vertical', rowHeight: 38 }} padding={4} let:item>
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
        color: var(--font-color);
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
        height: 100%;
        width: 100%;
    }

    .empty-state {
        align-items: center;
        display: flex;
        flex-direction: column;
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
        align-items: center;
        color: inherit;
        display: flex;
        flex-direction: column;
        font-family: inherit;
        font-size: 14px;
        gap: 8px;
        justify-content: center;
    }

    .empty-state-info a {
        color: var(--accent-color);
        font-family: inherit;
        text-decoration: none;
    }

    .empty-state-info a:hover {
        text-decoration: underline;
    }

    .empty-state-info p {
        color: inherit;
        font-family: inherit;
        font-weight: 500;
        margin: 0;
        text-align: center;
    }
</style>
