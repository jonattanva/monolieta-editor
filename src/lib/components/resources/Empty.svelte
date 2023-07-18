<script lang="ts">
    import Helper from './Helper.svelte';

    export let message = '';
    export let empty = '';
</script>

{#if empty === ''}
    <Helper {message} />
{:else}
    <div class="flex flex-col items-center justify-center gap-2 text-base">
        <p class="text-center font-medium">
            {empty}
        </p>
    </div>
{/if}
