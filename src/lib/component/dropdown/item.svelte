<script lang="ts">
    export let test: string = '';
</script>

<button
    class="flex w-full cursor-pointer items-center rounded p-1 hover:bg-gray-100"
    type="button"
    data-testid={test}
    on:click
>
    <slot />
</button>
