<script lang="ts">
    import Image from '$lib/component/icon/label.svelte';

    export let message: string | null = null;
</script>

{#if message !== null}
    <div class="flex flex-col items-center justify-center gap-2 text-base">
        <p class="text-center font-medium">
            {message}
        </p>
    </div>
{:else}
    <div class="px-6 pt-4 text-base">
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-center">
                <Image />
            </div>
            <div class="flex flex-col items-center justify-center gap-2">
                <p class="text-center font-medium text-gray-600">
                    A label that gives information about your annotation
                </p>
                <button
                    class="cursor-pointer text-center text-primary hover:underline focus:underline focus:outline-none"
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
