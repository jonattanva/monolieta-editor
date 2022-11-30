<script lang="ts">
    export let tabindex: number = 0;
    export let test: string | null = '';
    export let title: string = '';
</script>

<button
    class="flex h-7 w-7 items-center justify-center rounded border border-gray-200 bg-gray-100 p-1 text-gray-700 outline-gray-300 hover:bg-gray-300"
    data-testid={test}
    on:click
    type="button"
    {tabindex}
    {title}
>
    <slot />
</button>
