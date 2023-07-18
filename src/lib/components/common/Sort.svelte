<script lang="ts">
    import Item from '../dropdown/Item.svelte';
    import barsArrowDown from '$lib/assets/image/bars-arrow-down.svg';
    import barsArrowUp from '$lib/assets/image/bars-arrow-up.svg';
    import { createEventDispatcher } from 'svelte';
    import { translate } from '$lib/stores/locale';

    const dispatch = createEventDispatcher();

    const onAscending = () => dispatch('asc');
    const onDescending = () => dispatch('desc');
</script>

<Item on:click={onAscending}>
    <span class="mx-1 flex h-5 w-5 items-center justify-center">
        <img src={barsArrowDown} alt="Ascending icon" />
    </span>
    {$translate('Ascending')}
</Item>
<Item on:click={onDescending}>
    <span class="mx-1 flex h-5 w-5 items-center justify-center">
        <img src={barsArrowUp} alt="Descending icon" />
    </span>
    {$translate('Descending')}
</Item>
