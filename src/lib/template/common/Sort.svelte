<script lang="ts">
    import Dropdown from '$lib/components/dropdown';
    import barsArrowDown from '$lib/assets/image/bars-arrow-down.svg';
    import barsArrowUp from '$lib/assets/image/bars-arrow-up.svg';
    import { createEventDispatcher } from 'svelte';
    import { translate } from '$lib/stores/locale';

    const dispatch = createEventDispatcher();

    const onAscending = () => dispatch('asc');
    const onDescending = () => dispatch('desc');
</script>

<Dropdown.Item on:click={onAscending}>
    <Dropdown.Icon src={barsArrowDown} alt="Ascending icon" />
    <Dropdown.Label>
        {$translate('Ascending')}
    </Dropdown.Label>
</Dropdown.Item>
<Dropdown.Item on:click={onDescending}>
    <Dropdown.Icon src={barsArrowUp} alt="Descending icon" />
    <Dropdown.Label>
        {$translate('Descending')}
    </Dropdown.Label>
</Dropdown.Item>
