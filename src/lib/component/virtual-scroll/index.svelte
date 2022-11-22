<script lang="ts">
    import scroll from '$lib/action/scroll';
    import resize from '$lib/action/resize';

    export let direction: Monolieta.Direction = 'vertical';
    export let items: any[] = [];

    let width: number = 0;
    let height: number = 0;

    let scrollLeft: number = 0;
    let scrollTop: number = 0;

    function handleScroll(node: HTMLElement) {
        width = node.offsetWidth;
        height = node.offsetHeight;

        scrollTop = node.scrollTop;
        scrollLeft = node.scrollLeft;
    }

    function handleResize(node: HTMLElement) {
        width = node.offsetWidth;
        height = node.offsetHeight;

        scrollTop = node.scrollTop;
        scrollLeft = node.scrollLeft;
    }

    console.log(width, height);
</script>

<div
    class="relative m-0 flex h-full w-full items-stretch bg-transparent"
    use:scroll={handleScroll}
    use:resize={handleResize}
>
    <div class="absolute h-full w-full overflow-hidden">
        <div>
            {#each items as item}
                <slot {item} />
            {/each}
        </div>
    </div>
</div>
