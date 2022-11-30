<script lang="ts">
    import Message from './message.svelte';
    import Row from '$lib/layout/classes/row.svelte';
    import VirtualList from 'svelte-tiny-virtual-list';

    export let collection: Monolieta.Labels = [];

    let height = 0;
</script>

{#if collection.length === 0}
    <div class="px-4">
        <Message />
    </div>
{:else}
    <div class="h-screen w-full" bind:clientHeight={height}>
        <VirtualList
            width="100%"
            {height}
            itemCount={collection.length}
            itemSize={36}
            scrollDirection="vertical"
        >
            <div slot="item" let:index let:style {style} role="row" aria-rowindex={index}>
                <Row item={collection[index]} />
            </div>
        </VirtualList>
    </div>
{/if}
