<script lang="ts">
    /**
     * Attribute used for testing purposes
     */
    export let testid = '';
</script>

<button
    class="text-md flex w-full cursor-pointer items-center px-4 py-1 hover:bg-gray-100/90 dark:text-slate-200 hover:dark:bg-gray-100/10"
    type="button"
    data-testid={testid}
    on:click|preventDefault|stopPropagation
>
    <slot />
</button>
