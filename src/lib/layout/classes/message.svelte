<script lang="ts">
    import Image from '$lib/component/icon/label.svelte';

    export let message: string | null = null;
</script>

{#if message !== null}
    <div class="flex flex-col items-center justify-center gap-2">
        <p class="text-center text-sm font-medium">
            {message}
        </p>
    </div>
{:else}
    <div class="px-4">
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-center">
                <Image />
            </div>
            <div class="flex flex-col items-center justify-center gap-2">
                <p class="text-center text-sm font-medium text-gray-600">
                    A label that gives information about your annotation
                </p>
                <button
                    class="cursor-pointer text-center text-sm text-accent hover:underline focus:underline focus:outline-none"
                    type="button"
                    data-testid="new-label-optional"
                    on:click
                >
                    New label
                </button>
            </div>
        </div>
    </div>
{/if}
