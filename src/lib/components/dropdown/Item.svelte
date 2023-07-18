<script lang="ts">
    /**
     * Attribute used for testing purposes
     */
    export let testid = '';
</script>

<button
    class="flex w-full cursor-pointer items-center rounded p-0.5 hover:bg-gray-100"
    type="button"
    data-testid={testid}
    on:click
>
    <slot />
</button>
