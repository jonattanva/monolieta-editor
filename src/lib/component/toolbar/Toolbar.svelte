<script>
    import cursorArrowRays from '$lib/assets/cursor-arrow-rays.svg';
    import Fab from '../button/fab/Fab.svelte';
    import Separator from './Separator.svelte';
    import square2Stack from '$lib/assets/square-2-stack.svg';
</script>

<div class="flex w-full flex-row items-center rounded-md border bg-gray-50 p-1">
    <Fab
        active={true}
        alt="Cursor icon"
        border={false}
        image={cursorArrowRays}
        tabindex={-1}
        title="Selector"
    />
    <Separator />
    <Fab
        active={false}
        alt="Rect icon"
        border={false}
        image={square2Stack}
        tabindex={-1}
        title="Rect"
    />
</div>
