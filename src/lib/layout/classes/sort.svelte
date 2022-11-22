<script lang="ts">
    import BarsArrowDown from '$lib/component/icon/bars-arrow-down.svelte';
    import BarsArrowUp from '$lib/component/icon/bars-arrow-up.svelte';
    import Item from '$lib/component/dropdown/item.svelte';
    import Section from '$lib/component/dropdown/section.svelte';
    import store from '$lib/store/label';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const onAscending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return a.name.localeCompare(b.name);
        });
        
        dispatch('close');
    };

    const onDescending = () => {
        store.sort((a: Monolieta.Label, b: Monolieta.Label) => {
            return b.name.localeCompare(a.name);
        });

        dispatch('close');
    };
</script>

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
