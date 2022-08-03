<script lang="ts">
    import Add from '../action/Add.svelte';
    import Label from '../input/Label.svelte';
    import List from '../virtual/List.svelte';
    import More from '../action/More.svelte';
    import Search from '../input/Search.svelte';
    import color from '$lib/color';
    import store from '$lib/store/label';
    import { nanoid } from 'nanoid';

    export let items: Monolieta.Labels = [];

    const generate = (name: string = '') => ({
        id: nanoid(),
        name: name,
        color: color()
    });

    const add = () => store.set(generate());

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
        <List {items} setting={{ direction: 'vertical', rowHeight: 38 }}>
            <Label />
        </List>
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
</style>
