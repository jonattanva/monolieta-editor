<script lang="ts">
    export let testid: string = '';
    export let value: string = '';
</script>

<button
    class="flex w-full cursor-pointer items-center rounded p-1 hover:bg-gray-100"
    type="button"
    data-value={value}
    data-testid={testid}
    on:click
>
    <slot />
</button>
