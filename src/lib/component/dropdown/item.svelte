<script lang="ts">
    export let test: string = '';
    export let value: string = '';
</script>

<button
    class="flex w-full cursor-pointer items-center rounded p-1 hover:bg-gray-100"
    type="button"
    data-value={value}
    data-testid={test}
    on:click
>
    <slot />
</button>
