<script>
    import CursorArrowRays from '$lib/component/icon/cursor-arrow-rays.svelte';
    import Square2Stack from '$lib/component/icon/square-2-stack.svelte';
</script>

<div class="flex h-11 flex-row items-center gap-2 rounded border border-gray-200 bg-white p-2 ">
    <label
        class="peer flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"
    >
        <input class="peer sr-only" type="radio" name="action" checked={true} />
        <div class="h-5 w-5 text-gray-600 peer-checked:bg-red-400">
            <CursorArrowRays />
        </div>
    </label>
    <div class="my-2 h-full w-px bg-gray-200" />
    <label class="peer flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100">
        <input class="peer sr-only" type="radio" name="action" />
        <div class="h-5 w-5 text-gray-600 peer-checked:bg-red-400">
            <Square2Stack />
        </div>
    </label>
</div>
