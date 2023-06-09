<script lang="ts">
    import Message from './message.svelte';
    import Row from './row.svelte';
    import VirtualList from 'svelte-tiny-virtual-list';

    import type { Resource, Resources } from '$lib/type';

    export let collection: Resources = [];
    export let selected: Resource | null = null;

    let height = 0;

    $: itemCount = Math.ceil(collection.length / 2);
</script>

{#if collection.length === 0}
    <Message />
{:else}
    <div class="h-screen w-full" bind:clientHeight={height}>
        <VirtualList
            width="100%"
            {itemCount}
            {height}
            scrollDirection="vertical"
            itemSize={120 + 4 * 2}
        >
            <div
                slot="item"
                let:index
                let:style
                {style}
                role="row"
                aria-rowindex={index}
                data-testid="resource-row"
            >
                <div class="grid grid-cols-2 gap-0">
                    {#each Array(2) as _, i}
                        {@const item = collection[index * 2 + i]}
                        {#if item !== undefined}
                            <Row
                                {item}
                                selected={selected !== null && selected.id === item.id}
                                on:click
                            />
                        {/if}
                    {/each}
                </div>
            </div>
        </VirtualList>
    </div>
{/if}
