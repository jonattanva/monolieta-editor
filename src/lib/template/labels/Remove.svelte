<script lang="ts">
    import Modal from '$lib/components/Modal.svelte';
    import { translate } from '$lib/stores/locale';

    export let name = '';
</script>

<Modal positive={$translate('Delete')} on:cancel on:submit>
    <div class="flex w-full flex-col gap-4">
        <h3 class="basis-3/4 truncate text-2xl font-bold leading-7 tracking-tight text-gray-900">
            {$translate('Delete label')}
        </h3>
        <div class="text-base text-gray-500">
            {$translate('You are about to permanently delete the name label')} "{name}"
        </div>
    </div>
</Modal>
