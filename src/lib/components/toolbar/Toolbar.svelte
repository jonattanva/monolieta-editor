<script lang="ts">
    import cursorArrowRays from '$lib/assets/image/cursor-arrow-rays.svg';
    import square2Stack from '$lib/assets/image/square-2-stack.svg';
    import cube from '$lib/assets/image/cube.svg';
    import Action from './Action.svelte';
    import Separator from './Separator.svelte';
    import handRaised from '$lib/assets/image/hand-raised.svg';
</script>

<div class="flex w-full flex-row items-center rounded-md border bg-gray-50 bg-white px-3 py-1">
    <Action src={cursorArrowRays} alt="Cursor default" />
    <Action src={handRaised} alt="Hand (panning tool)" />
    <Separator />
    <Action src={square2Stack} alt="Rect action" />
    <Action src={cube} alt="Cube action" />
</div>
