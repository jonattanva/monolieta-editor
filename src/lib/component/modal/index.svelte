<script lang="ts">
    import Contained from '$lib/component/button/contained/index.svelte';
    import Text from '$lib/component/button/text/index.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let positiveButton: string;
    export let showPositiveButton: boolean = true;
    export let disabledPositiveButton: boolean = false;

    const onCancel = (event: Event) => {
        dispatch('cancel', {
            event
        });
    };

    const onSubmit = (event: Event) => {
        dispatch('submit', {
            event
        });
    };
</script>

<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
            <div
                class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
                <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <slot />
                    </div>
                </div>
                <div class="rounded-b-lg bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {#if showPositiveButton}
                        <span class="sm:ml-3">
                            <Contained on:click={onSubmit} disabled={disabledPositiveButton}>
                                {positiveButton}
                            </Contained>
                        </span>
                    {/if}
                    <Text on:click={onCancel}>Cancel</Text>
                </div>
            </div>
        </div>
    </div>
</div>
