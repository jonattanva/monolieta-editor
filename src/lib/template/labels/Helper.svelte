<script lang="ts">
    import Helper from '$lib/components/Helper.svelte';
    import labelEmpty from '$lib/assets/image/label-empty.svg';
    import { translate } from '$lib/stores/locale';

    export let message: string | null = null;
</script>

{#if message}
    <div class="flex flex-col items-center justify-center gap-2 text-base">
        <p class="title-secondary">
            {message}
        </p>
    </div>
{:else}
    <Helper
        action={$translate('New label')}
        message={$translate('A label that gives information about your annotation')}
        on:click
    >
        <img class="dark:invert" src={labelEmpty} alt="Empty icon" />
    </Helper>
{/if}
