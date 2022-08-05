<script lang="ts">
    import Add from '../action/Add.svelte';
    import Label from '../input/Label.svelte';
    import List from '../virtual/List.svelte';
    import More from '../action/More.svelte';
    import Search from '../input/Search.svelte';
    import color from '$lib/color';
    import image from '$lib/assets/label.webp';
    import store from '$lib/store/label';
    import { nanoid } from 'nanoid';

    export let items: Monolieta.Labels = [];

    // prettier-ignore
    const add = () => store.set({
        id: nanoid(),
        name: '',
        color: color()
    });

    store.subscribe((values) => {
        items = values;
    });
</script>

<div class="main">
    <div class="header">
        <div class="control">
            <div>Classes</div>
            <div class="action">
                <Add click={add} />
                <More click={() => {}} />
            </div>
        </div>
        <Search search={() => {}} />
    </div>
    <div class="collection">
        {#if items.length === 0}
            <div class="empty-state">
                <div class="empty-state-picture">
                    <img alt="The label" src={image} />
                </div>
                <div class="empty-state-info">
                    <p>A label that gives information about your annotation.</p>
                    <a href={'#'} on:click={add}>New label</a>
                </div>
            </div>
        {:else}
            <List {items} setting={{ direction: 'vertical', rowHeight: 38 }} padding={8} let:item>
                <Label color={item.color} />
            </List>
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
