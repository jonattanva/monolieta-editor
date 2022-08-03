<script lang="ts">
    import { onMount } from 'svelte';

    type Vertical = {
        columnWidth?: never;
        direction: 'vertical';
        rowHeight: number;
    };

    type Horizontal = {
        columnWidth: number;
        direction: 'horizontal';
        rowHeight?: never;
    };

    export let items: Monolieta.Entities = [];
    export let setting: Vertical | Horizontal;

    let dataset: Monolieta.Entities = [];
    let main: HTMLDivElement;

    function getSize() {
        return items.length;
    }

    function isVertical() {
        return setting.direction === 'vertical';
    }

    function getNode() {
        // prettier-ignore
        const { 
            rowHeight = 0, 
            columnWidth = 0 
        } = setting;

        return isVertical() ? rowHeight : columnWidth;
    }

    function getOffset() {
        if (main) {
            return isVertical() ? main.scrollTop : main.scrollLeft;
        }
        return 0;
    }

    function getClientSize() {
        if (main) {
            return isVertical() ? main.clientHeight : main.clientWidth;
        }
        return 0;
    }

    function getContentSize() {
        return getNode() * getSize();
    }

    function getVisibleNode(offset: number, node: number, content: number) {
        console.log('offset', offset);
        console.log('node', node);
        console.log('content', content);

        const translateNode = Math.floor(offset / content);
        const startNode = Math.max(0, translateNode);

        const visibleNode = Math.ceil(node / content);
        const visibleNodeCount = Math.min(content - startNode, visibleNode + 2);
        
        return [startNode, visibleNodeCount];
    }

    function getContent() {
        const node = getNode();
        const offset = getOffset();
        const content = getContentSize();

        const [startNode, visibleNodeCount] = getVisibleNode(offset, node, content);
        return items.slice(startNode, startNode + visibleNodeCount);
    }

    $: handleDataSourcesChange(items);

    function handleDataSourcesChange(_: Monolieta.Entities) {
        dataset = getContent();
    }
</script>

<div bind:this={main} class="main">
    <div>
        {#each dataset as item (item.id)}
            <slot {item} />
        {/each}
    </div>
</div>

<style>
    .main {
        background-color: transparent;
        height: 100%;
    }
</style>
