<script lang="ts">
    import scroll from '$lib/action/scroll';

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

    type Collection = readonly any[];

    export let items: Collection = [];
    export let setting: Vertical | Horizontal;
    export let padding: number = 0;

    let bodyStyle: string = '';
    let entities: Collection = [];
    let main: HTMLDivElement;
    let viewportStyle: string = '';

    function getViewportStyle(value: number) {
        return isVertical() ? `height:${value}px` : `width:${value}px`;
    }

    function getBodyStyle(value: number) {
        return isVertical()
            ? `transform: translate(0, ${value}px); gap: ${padding}px`
            : `transform: translate(${value}px, 0); gap: ${padding}px`;
    }

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

        return (isVertical() ? rowHeight : columnWidth) + padding;
    }

    function getOffset() {
        if (main) {
            return isVertical() ? main.offsetHeight : main.offsetWidth;
        }
        return 0;
    }

    function getScroll() {
        if (main) {
            return isVertical() ? main.scrollTop : main.scrollLeft;
        }
        return 0;
    }

    function getContentSize() {
        return getNode() * getSize();
    }

    function getTranslate(start: number, node: number) {
        const value = start * node;
        return !isNaN(value) ? value : 0;
    }

    function getContent(scroll: number) {
        const node = getNode();
        const content = getContentSize();

        const [startNode, visibleNodeCount] = getVisibleNode(scroll, node);
        const translate = getTranslate(startNode, node);

        bodyStyle = getBodyStyle(translate);
        viewportStyle = getViewportStyle(content);

        entities = items.slice(startNode, startNode + visibleNodeCount);
    }

    function getVisibleNode(scroll: number, node: number) {
        const total = getSize();
        const offset = getOffset();

        const translateNode = Math.floor(scroll / node);
        const startNode = Math.max(0, translateNode);

        const visibleColumnCount = Math.ceil(offset / node);
        const visibleNodeCount = Math.min(total - startNode, visibleColumnCount + 2);

        return [startNode, visibleNodeCount];
    }

    $: handleDataSourcesChange(items);

    function handleDataSourcesChange(_: Monolieta.Entities) {
        getContent(getScroll());
    }

    function handleScroll(left: number, top: number) {
        getContent(isVertical() ? top : left);
    }
</script>

<!-- TODO: include space for the scroll -->
<div class="main main--{setting.direction}" use:scroll={{ set: handleScroll }} bind:this={main}>
    <div class="viewport" style={viewportStyle}>
        <div class="body body--{setting.direction}" style={bodyStyle}>
            {#each entities as item (item.id)}
                <slot {item} />
            {/each}
        </div>
    </div>
</div>

<style>
    .main {
        align-items: stretch;
        background: transparent;
        display: flex;
        height: 100%;
        margin: 0;
        position: relative;
        transform: translateZ(0);
        width: 100%;
        will-change: scroll-position;
    }

    .main--vertical {
        overflow-x: hidden;
    }

    .main--horizontal {
        overflow-y: hidden;
    }

    .viewport {
        height: 100%;
        overflow: hidden;
        position: absolute;
        transform: translateZ(0);
        width: 100%;
        will-change: transform;
    }

    .body {
        align-content: flex-start;
        align-items: flex-start;
        contain: content;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100%;
        justify-content: flex-start;
        margin: 0 auto;
        padding: 0;
        will-change: transform;
    }

    .body--horizontal {
        flex-direction: row;
    }

    .body--vertical {
        flex-direction: column;
    }
</style>
