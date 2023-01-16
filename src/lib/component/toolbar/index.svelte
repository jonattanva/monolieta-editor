<script>
    import Cube from '$lib/component/icon/cube.svelte';
    import CursorArrowRays from '$lib/component/icon/cursor-arrow-rays.svelte';
    import Item from './item.svelte';
    import Separator from './separator.svelte';
    import Square2Stack from '$lib/component/icon/square-2-stack.svelte';
</script>

<div class="flex h-11 flex-row items-center gap-2 rounded bg-white p-2">
    <Item checked={true} title="Cursor" on:change>
        <CursorArrowRays />
    </Item>
    <Separator />
    <Item title="Rectangle" on:change>
        <Square2Stack />
    </Item>
    <Item title="Cuboid" on:change>
        <Cube />
    </Item>
</div>
