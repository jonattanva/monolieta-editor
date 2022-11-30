<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let delay: number = 5000;
    export let message: string;
    export let negativeButton: string = 'Cancel';
    export let positiveButton: string = 'Retry';
    export let showNegativeButton: boolean = true;
    export let showPositiveButton: boolean = true;
    export let title: string;

    const dispatch = createEventDispatcher();

    const onNegativeButton = () => dispatch('negative');
    const onPositiveButton = () => dispatch('positive');

    setTimeout(onNegativeButton, delay);
</script>

<div
    class="fixed right-4 top-4 z-50 min-w-[380px] rounded border border-gray-200 bg-white p-4 shadow"
>
    <div class="flex justify-between">
        <div class="truncate text-base font-medium">{title}</div>
    </div>
    <p class="text-sm text-gray-500">{message}</p>
    <div class="mt-2 flex gap-4">
        {#if showPositiveButton}
            <button type="button" on:click={onPositiveButton} class="text-sm text-accent"
                >{positiveButton}</button
            >
        {/if}
        {#if showNegativeButton}
            <button type="button" class="text-sm" on:click={onNegativeButton}>
                {negativeButton}
            </button>
        {/if}
    </div>
</div>
