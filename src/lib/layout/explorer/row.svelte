<script lang="ts">
    import Picture from '$lib/component/picture/index.svelte';
    import { createEventDispatcher } from 'svelte';

    export let item: Monolieta.Resource;

    const dispatch = createEventDispatcher();

    const onSelected = (event: Event) =>
        dispatch('click', {
            event,
            item
        });
</script>

<div class="mx-auto h-[120px] w-[120px]" role="img" on:click={onSelected} on:keydown={onSelected}>
    <Picture source={item.source} alt="" />
</div>
