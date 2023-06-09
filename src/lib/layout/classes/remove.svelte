<script lang="ts">
    import Modal from '$lib/component/modal/index.svelte';

    export let item = '';
</script>

<Modal on:cancel on:submit positive="Delete">
    <div class="flex w-full flex-col gap-4">
        <h3 class="basis-3/4 truncate text-2xl font-bold leading-7 tracking-tight text-gray-900">
            Delete label
        </h3>
        <div class="text-base text-gray-500">
            You're about to permanently delete the label <strong><code>{item}</code></strong>
        </div>
    </div>
</Modal>
